const PARAMS = {
    speed: 0.2
}

const cursor = document.querySelector('.cursor');

const paths = cursor.querySelectorAll('path');

paths.forEach(path => {
    path.style.stroke = 'transparent';
});

const mouse = {
    x: null,
    y: null
} // здесь храню координаты мыши

const pos = {
  x: null,
  y: null
}

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x = Math.round(pos.x + diffX * PARAMS.speed);
    pos.y = Math.round(pos.y + diffY * PARAMS.speed);

    const translate = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

    cursor.style.transform = translate;
}

const updateCoordinates = (evt) => {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
} // сохраняю координаты мыши

window.addEventListener('mousemove', updateCoordinates); // слежу за передвижением мыши

const requestAnimationHandler = () => {
  updateCursor();
  requestAnimationFrame(requestAnimationHandler); // здесь функция прослойка нужна если вдруг появится еще одна анимация
}

requestAnimationFrame(requestAnimationHandler);