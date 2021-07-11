class ClientWorld {
    constructor(game, engine, levelCfg) {
        Object.assign(this, {
            game,
            engine,
            levelCfg,
            height: game.engine.canvas.width / levelCfg.map.length,
            width: game.engine.canvas.width / levelCfg.map[0].length,
        });
    }

    init() {
        this.levelCfg.map.forEach((cfgRow, yIdx) => {
            cfgRow.forEach((cfgCol, xIdx) => {
                this.engine.renderSpriteFrame({
                    sprite: ['terrain', cfgCol[0][0]],
                    frame: 0,
                    x: xIdx * this.width,
                    y: yIdx * this.height,
                    w: 48,
                    h: 48,
                });
            });
        });
    }
}

export default ClientWorld;
