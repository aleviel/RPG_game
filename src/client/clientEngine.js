import EventSourceMixin from '../common/EventSourceMixin';
import ClientCamera from './clientCamera';
import ClientInput from './clientInput';

class ClientEngine {
    constructor(canvas) {
        Object.assign(this, {
            canvas,
            ctx: null,
            imageLoader: [],
            sprites: {},
            images: [],
            camera: new ClientCamera({ canvas, engine: this }),
            input: new ClientInput(canvas),
        });

        this.ctx = canvas.getContext('2d');
        this.loop = this.loop.bind(this);
    }

    start() {
        this.loop();
    }

    loop(timestamp) {
        const { ctx, canvas } = this;
        ctx.fillStyle = 'black';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.trigger('render', timestamp);
        this.initNextFrame();
    }

    initNextFrame() {
        window.requestAnimationFrame(this.loop);
    }

    loadSprites(spritesGroup) {
        this.imageLoader = [];
        Object.keys(spritesGroup).forEach((spritesGroupName) => {
            const group = spritesGroup[spritesGroupName];
            this.sprites[spritesGroupName] = group;
            Object.keys(group).forEach((spriteName) => {
                const { img } = group[spriteName];
                if (!this.images[img]) {
                    this.imageLoader.push(this.loadImg(img));
                }
            });
        });
        return Promise.all(this.imageLoader);
    }

    loadImg(imgUrl) {
        return new Promise((resolve) => {
            const i = new Image();
            this.images[imgUrl] = i;
            i.onload = () => {
                resolve(i);
            };
            i.src = imgUrl;
        });
    }

    renderSpriteFrame({ sprite, frame, x, y, w, h }) {
        const spriteCfg = this.sprites[sprite[0]][sprite[1]];
        const [fx, fy, fw, fh] = spriteCfg.frames[frame];
        const img = this.images[spriteCfg.img];
        this.ctx.drawImage(img, fx, fy, fw, fh, x, y, w, h);
    }
}

Object.assign(ClientEngine.prototype, EventSourceMixin);

export default ClientEngine;
