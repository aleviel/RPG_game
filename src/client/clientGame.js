import ClientEngine from './clientEngine';
import ClientWorld from './clientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
    constructor(cfg) {
        Object.assign(this, {
            cfg,
            gameObjects,
            player: null,
        });

        this.engine = this.createEngine();
        this.initEngine();
        this.world = this.createWorld();
    }

    static init(cfg) {
        if (!ClientGame.game) {
            ClientGame.game = new ClientGame(cfg);
        }
    }

    setPlayer(player) {
        this.player = player;
    }

    initEngine() {
        this.engine.loadSprites(sprites).then(() => {
            this.world.init();
            this.engine.on('render', (_, time) => {
                this.world.render(time);
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
