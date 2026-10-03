const PARAMS = {

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

const updateCursor = () => {
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