import ClientEngine from './clientEngine';
import ClientWorld from './clientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';

class ClientGame {
    constructor(cfg) {
        Object.assign(this, { cfg });
        this.engine = this.createEngine();
        this.initEngine();
        this.world = this.createWorld();
    }

    static init(cfg) {
        if (!ClientGame.game) {
            ClientGame.game = new ClientGame(cfg);
        }
    }

    initEngine() {
        this.engine.loadSprites(sprites).then(() => {
            this.engine.on('render', () => {
                this.world.init();
            });
            this.engine.start();
        });
    }

    createEngine() {
        return new ClientEngine(document.getElementById(this.cfg.tagId));
    }

    createWorld() {
        return new ClientWorld(this, this.engine, levelCfg);
    }
}

export default ClientGame;
