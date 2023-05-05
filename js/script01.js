/*Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс еліпс. Якщо всі данні введено і чекбокс
чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс не чекнутий то кнопка також розблоковується
і малюється прямокутник за заданими розмірами */
const canvas=document.getElementById("canvas");
const context = canvas.getContext('2d');

const widthInput=document.getElementById("width");
const heightInput=document.getElementById("height");
const ellipseCheckbox=document.getElementById("ellipse");
const drawButton=document.getElementById("draw_btn");

drawButton.addEventListener("click", draw);

function draw() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (ellipseCheckbox.checked) {
        context.beginPath();
        context.ellipse(canvas.width / 2, canvas.height / 2, width / 2, height / 2, 0, 0, 2 * Math.PI);
        context.stroke();
    } else {
        context.strokeRect(0, 0, width, height);
    }
}

widthInput.addEventListener("input", validateInputs);
heightInput.addEventListener("input", validateInputs);
ellipseCheckbox.addEventListener("change", validateInputs);

function validateInputs() {
    if (widthInput.validity.valid && heightInput.validity.valid && (ellipseCheckbox.checked || !ellipseCheckbox.checked)) {
        drawButton.disabled = false;
    } else {
        drawButton.disabled = true;
    }
}
