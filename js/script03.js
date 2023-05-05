/* Створити функцію яка малює коло в канвасі і розміщує в середині кола текст*/
function drawCircleWithText(canvasId, text, circleColor, textColor) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');

    // Визначаємо координати та радіус кола
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    // Рахуємо ширину та висоту тексту
    context.font = "20px Arial";
    const textWidth = context.measureText(text).width;
    const textHeight = 20;

    // Малюємо коло
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);

    context.fillStyle = circleColor;
    context.fill();

    context.strokeStyle = circleColor;
    context.lineWidth = 2;
    context.stroke();

    // Додаємо текст у коло
    context.fillStyle = textColor;
    context.fillText(text, centerX - (textWidth / 2), centerY + (textHeight / 2));
}

// Виклик функції з параметрами
drawCircleWithText("myCanvas", "Hello World!", "green", "black");


