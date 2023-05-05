/*створити інпут куди водиться значення і кнопку . Після введення значення ( цифрового ) і натискання на кнопку
малються кола за допомогою svg. При натисканні на намальованне коло воно повино видалятись. */

const canvas = document.getElementById('canvas');
const drawButton = document.getElementById('draw-circle');
const radiusInput = document.getElementById('circle-radius');

function drawCircle(radius) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', '50%');
    circle.setAttribute('cy', '50%');
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', 'blue');
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('stroke-width', '2');

    canvas.appendChild(circle);

    circle.addEventListener('click', () => {
        canvas.removeChild(circle);
    });
}

drawButton.addEventListener('click', () => {
    const radius = radiusInput.value;
    drawCircle(radius);
});




