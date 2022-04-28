import { Canvas } from './modules/canvas';
import { Sprite } from './modules/sprite';

const PI2 = Math.PI * 2;

const sun = new Sprite({
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  color: '#f66',
  speed: 0,
});

const earth = new Sprite({
  x: 420,
  y: 0,
  width: 40,
  height: 40,
  color: '#66c',
  speed: 60000,
});

const moon = new Sprite({
  x: 480,
  y: 0,
  width: 10,
  height: 10,
  color: '#ccc',
  speed: 6000,
});

const getRotation = function (time: Date, speed: number, delimiter: number): number {
  return ((2 * Math.PI) / delimiter) * time.getSeconds() + ((2 * Math.PI) / speed) * time.getMilliseconds();
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = new Canvas('.stage');
  canvas.context.globalCompositeOperation = 'destination-over';

  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
  canvas.keyframe((ctx) => {
    const time = new Date();

    canvas.clear();
    ctx.save();
    
    // Earth
    ctx.translate(canvas.centerX, canvas.centerY);
    ctx.rotate(getRotation(time, earth.speed, 60));
    ctx.translate(-canvas.centerX, -canvas.centerY);
    ctx.beginPath();
    ctx.arc(canvas.centerX + earth.x, canvas.centerY + earth.y, earth.width / 2, 0, PI2);
    ctx.fillStyle = earth.color;
    ctx.fill();
    ctx.save();
    
    // Moon
    ctx.translate(canvas.centerX + earth.x, canvas.centerY + earth.y);
    ctx.rotate(getRotation(time, moon.speed, 6));
    ctx.translate(-(canvas.centerX + earth.x), -(canvas.centerY + earth.y));
    ctx.beginPath();
    ctx.arc(canvas.centerX + moon.x, canvas.centerY + moon.y, moon.width / 2, 0, PI2);
    ctx.fillStyle = moon.color;
    ctx.fill();
    ctx.restore();

    // Sun
    ctx.beginPath();
    ctx.arc(canvas.centerX, canvas.centerY, sun.width / 2, 0, PI2);
    ctx.fillStyle = sun.color;
    ctx.fill();
    ctx.restore();
  });
});
