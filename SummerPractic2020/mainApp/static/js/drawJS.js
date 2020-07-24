var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
    context.lineWidth = 30;
}

function startDrawing(e) {
    // Начинаем рисовать
    isDrawing = true;

    // Создаем новый путь (с текущим цветом и толщиной линии)
    context.beginPath();

    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing === true)
    {
        // Определяем текущие координаты указателя мыши
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        // Рисуем линию до новой координаты
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function saveCanvas() {
    var RefCopy = document.getElementById("refImg");
    RefCopy.setAttribute("href", canvas.toDataURL());
}

function formCode() {
    var url = canvas.toDataURL("image/png");
    var codeSpace = document.getElementById("codeBlock")
    codeSpace.setAttribute("value", url)
}