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
    
}

const updateCoordinates = (evt) => {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
} // сохраняю координаты мыши

window.addEventListener('mousemove', updateCoursor); // слежу за передвижением мыши

const requestAnimationHandler = () => {
  updateCursor();
  requestAnimationFrame(requestAnimationHandler);
}

requestAnimationFrame(requestAnimationHandler);