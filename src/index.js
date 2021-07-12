import './index.scss';
import ClientGame from './client/clientGame';

window.addEventListener('load', () => {
    ClientGame.init({ tagId: 'canvas' });
});

// import './index.scss';
//
// import Sensei from './assets/Male-3-Walk.png';
// import worldConfig from './configs/world.json';
// import sprites from './configs/sprites';
// import terrainAtlas from './assets/terrain.png';
//
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// canvas.style.background = 'rgba(226,180,180,0.7)';
//
// const SETTINGS = {
//     spriteShift: 0,
//     spriteW: 48,
//     spriteH: 48,
//     cycle: 0,
//     shots: 3,
//     speed: 10,
//     CanvasWidth: canvas.width,
//     CanvasHeight: canvas.height,
//     pY: 0,
//     pX: 0,
// };
//
// const KEYS = {
//     ArrowUp: false,
//     ArrowDown: false,
//     ArrowRight: false,
//     ArrowLeft: false,
// };
//
// const PersonImg = document.createElement('img');
// PersonImg.src = Sensei;
//
// function moveChar() {
//     // eslint-disable-next-line no-unused-expressions
//     KEYS.ArrowDown &&
//         SETTINGS.pY < SETTINGS.CanvasHeight - SETTINGS.spriteH &&
//         (SETTINGS.pY += SETTINGS.speed) &&
//         (SETTINGS.cycle = (SETTINGS.cycle + 1) % SETTINGS.shots) &&
//         (SETTINGS.spriteShift = 0);
//     // eslint-disable-next-line no-unused-expressions
//     KEYS.ArrowUp &&
//         SETTINGS.pY > 0 &&
//         (SETTINGS.pY -= SETTINGS.speed) &&
//         (SETTINGS.cycle = (SETTINGS.cycle + 1) % SETTINGS.shots) &&
//         (SETTINGS.spriteShift = SETTINGS.spriteW * 3);
//     // eslint-disable-next-line no-unused-expressions
//     KEYS.ArrowLeft &&
//         SETTINGS.pX > 0 &&
//         (SETTINGS.pX -= SETTINGS.speed) &&
//         (SETTINGS.cycle = (SETTINGS.cycle + 1) % SETTINGS.shots) &&
//         (SETTINGS.spriteShift = SETTINGS.spriteW);
//     // eslint-disable-next-line no-unused-expressions
//     KEYS.ArrowRight &&
//         SETTINGS.pX < SETTINGS.CanvasWidth - SETTINGS.spriteW &&
//         (SETTINGS.pX += SETTINGS.speed) &&
//         (SETTINGS.cycle = (SETTINGS.cycle + 1) % SETTINGS.shots) &&
//         (SETTINGS.spriteShift = SETTINGS.spriteW * 2);
//
//     ctx.clearRect(0, 0, 600, 600);
//     ctx.drawImage(
//         PersonImg,
//         SETTINGS.cycle * SETTINGS.spriteW,
//         SETTINGS.spriteShift,
//         SETTINGS.spriteW,
//         SETTINGS.spriteH,
//         SETTINGS.pX,
//         SETTINGS.pY,
//         SETTINGS.spriteW,
//         SETTINGS.spriteH,
//     );
//     window.requestAnimationFrame(moveChar);
// }
//
// PersonImg.addEventListener('load', () => {
//     document.querySelector('h3').remove();
//     SETTINGS.pY = SETTINGS.CanvasHeight / 2 - SETTINGS.spriteH / 2;
//     SETTINGS.pX = SETTINGS.CanvasWidth / 2 - SETTINGS.spriteW / 2;
//     window.requestAnimationFrame(moveChar);
// });
//
// function startRun(event) {
//     event.preventDefault();
//     KEYS[event.key] = true;
// }
//
// function stopRun(event) {
//     event.preventDefault();
//     KEYS[event.key] = false;
// }
//
// document.addEventListener('keydown', startRun);
// document.addEventListener('keyup', stopRun);
//
// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
// terrain.addEventListener('load', () => {
//     const { map } = worldConfig;
//     map.forEach((cfgRow, yIdx) => {
//         cfgRow.forEach((cfgCol, xIdx) => {
//             const [sX, sY, sW, sH] = sprites.terrain[cfgCol[0]].frames[0];
//             ctx.drawImage(
//                 terrain,
//                 sX,
//                 sY,
//                 sW,
//                 sH,
//                 xIdx * SETTINGS.spriteW,
//                 yIdx * SETTINGS.spriteH,
//                 SETTINGS.spriteW,
//                 SETTINGS.spriteH,
//             );
//         });
//     });
// });
