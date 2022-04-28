import { Canvas } from './modules/canvas';
import { Sprite } from './modules/sprite';

document.addEventListener('DOMContentLoaded', () => {
  const PI2 = Math.PI * 2;
  const canvas = new Canvas('.stage');
  const sun = new Sprite({
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    color: '#f00',
    speed: 1,
  });

  const earth = new Sprite({
    x: 100,
    y: 100,
    width: 40,
    height: 40,
    color: '#f00',
    speed: 1,
  });

  const moon = new Sprite({
    x: 140,
    y: 140,
    width: 10,
    height: 10,
    color: '#f00',
    speed: 1,
  });

  canvas.context.globalCompositeOperation = 'destination-over';



  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
  canvas.keyframe((ctx) => {
    // const time = new Date();

    canvas.clear();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    // ctx.translate(canvas.centerX, canvas.centerY);

    ctx.beginPath();
    ctx.moveTo(canvas.centerX, canvas.centerY);
    ctx.arc(canvas.centerX, canvas.centerY, sun.width / 2, 0, PI2);

    ctx.moveTo(earth.x, earth.y);
    ctx.arc(earth.x, earth.y, earth.width / 2, 0, PI2);

    ctx.moveTo(moon.x, moon.y);
    ctx.arc(moon.x, moon.y, moon.width / 2, 0, PI2);
    ctx.stroke();
    ctx.fill();

    // Earth
    // ctx.rotate(
    //   ((2 * Math.PI) / 60) * time.getSeconds() +
    //     ((2 * Math.PI) / 60000) * time.getMilliseconds()
    // );
    // // ctx.translate(105, 0);
    // ctx.fillRect(earth.x, earth.y, earth.width, earth.height);

    // // Moon
    // ctx.save();
    // ctx.rotate(
    //   ((2 * Math.PI) / 6) * time.getSeconds() +
    //     ((2 * Math.PI) / 6000) * time.getMilliseconds()
    // );
    // ctx.translate(0, 28.5);
    // ctx.restore();
  });
});
