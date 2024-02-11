console.clear();

const circleElement = document.querySelector('.mouse-effect-circle');

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  // Show or hide the circle on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    document.querySelector('.mouse-effect-circle').classList.add('hidden');
  } else {
    document.querySelector('.mouse-effect-circle').classList.remove('hidden');
  }
});

const speed = 0.15;

const tick = () => {
  // Update the circle position
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  // Apply the transform to move the circle
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
  circleElement.style.transform = translateTransform;

  window.requestAnimationFrame(tick);
}

tick();
