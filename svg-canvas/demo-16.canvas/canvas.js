// Refer: https://www.w3schools.com/graphics/canvas_reference.asp
// See more:
// + Canvas Clock: https://www.w3schools.com/graphics/canvas_clock.asp
// + HTML Game: https://www.w3schools.com/graphics/game_intro.asp

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
drawAxis();
drawGrid();
drawRectangle();
drawCircle(400, 450, 50);
drawLine();
drawText();


drawCircle(600, 450, 50);
drawImg();
transform();
function drawAxis() {
    ctx.font="12px Comic Sans MS";
    ctx.fillStyle = "green";
    
    for (var x = 100; x <= canvas.width; x+=100) {
        ctx.fillText(x, x, 10);
    }
    for (var y = 100; y <= canvas.height; y+=100) {
        ctx.fillText(y, 0, y);
    }
}
function drawGrid() {
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    for (var x = 100; x <= canvas.width; x+=100) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (var y = 100; y <= canvas.height; y+=100) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
}
function drawLine() {
    ctx.beginPath();
    // Create gradient
    var gradient = ctx.createLinearGradient(200, 0, 800, 0);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.5", "magenta");
    gradient.addColorStop("1.0", "cyan");
    // Fill with gradient
    ctx.strokeStyle = gradient;
    //ctx.strokeStyle = "green";
    ctx.moveTo(200, 120);
    ctx.lineTo(800, 120);
    ctx.stroke();
}
function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.fillStyle = "yellow";
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}
function drawText() {
    ctx.font = "90px Arial";
    // Create gradient
    var gradient = ctx.createLinearGradient(200, 0, 800, 0);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.5", "magenta");
    gradient.addColorStop("1.0", "cyan");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("Kmin Academy", 200, 100);
}
function drawRectangle() {
    ctx.fillStyle = "#222";
    ctx.fillRect(300, 200, 400, 200);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;  
    ctx.strokeRect(300, 200, 400, 200);
}
function drawImg() {
    var img = document.getElementById("logo");
    ctx.drawImage(img, 400, 200, 200, 200);
}

function transform() {
    ctx.translate(800, 120);
    ctx.rotate(30* Math.PI / 180);
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, 100, 50);
}