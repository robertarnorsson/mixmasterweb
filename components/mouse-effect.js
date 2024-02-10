console.clear();

const circleElement = document.querySelector('.mouse-effect-circle');
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;
let targetAngle = 0;

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.25;

function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle < 0) {
    angle += 360;
  }
  return angle;
}

function shortestAngleDist(a, b) {
  const max = 360;
  const da = (b - a) % max;
  return 2 * da % max - da;
}

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  if (mouseVelocity > 20) {
    targetAngle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
    targetAngle = normalizeAngle(targetAngle);
  }

  currentAngle = normalizeAngle(currentAngle);
  let angleDiff = shortestAngleDist(currentAngle, targetAngle);
  currentAngle += angleDiff * speed;

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}

tick();

if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
  document.querySelector('.mouse-effect-circle').classList.add('hidden');
}