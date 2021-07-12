import terrainIMG from '../assets/terrain.png';

export default {
    terrain: {
        grass: {
            img: terrainIMG,
            frames: [[896, 256, 64, 64]],
        },
        reeds: {
            img: terrainIMG,
            frames: [[768, 320, 64, 64]],
        },
        rails: {
            img: terrainIMG,
            frames: [[0, 512, 64, 64]],
        },
        railsR: {
            img: terrainIMG,
            frames: [[0, 448, 64, 64]],
        },
        skull: {
            img: terrainIMG,
            frames: [[576, 0, 64, 64]],
        },
        water: {
            img: terrainIMG,
            frames: [[0, 576, 64, 64]],
        },
        wall: {
            img: terrainIMG,
            frames: [[448, 64, 64, 64]],
        },
        spawn: {
            img: terrainIMG,
            frames: [[384, 640, 64, 64]],
        },
        npcSpawn: {
            img: terrainIMG,
            frames: [[896, 576, 64, 64]],
        },
    },
};
