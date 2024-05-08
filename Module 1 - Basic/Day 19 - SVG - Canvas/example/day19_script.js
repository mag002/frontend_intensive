var canvas = document.getElementsByTagName('canvas')[0];
var mouse = {
    x: undefined,
    y: undefined
}
function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;

}
function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}
canvas.width = window.innerWidth;
canvas.height = window.window.innerHeight;
var ctx = canvas.getContext('2d');


function randomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function getDistance(x1, y1, x2, y2) {
    var xDiff = x2 - x1;
    var yDiff = y2 - y1;
    return distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
}
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = `hsl(${hue},100%,50%)`;
    ctx.fill()
    ctx.stroke();
}


function drawCircleStatic() {
    ctx.beginPath();
    ctx.arc(circle_two.x, circle_two.y, circle_two.radius, 0, Math.PI * 2)
    ctx.fillStyle = `hsl(${hue},100%,50%)`;
    ctx.fill()
    ctx.stroke();
}
/*
    Lop Xe Hoi:
    Banh xe
    Dong co
    Vo
    mau sac

    //
    Banh xe:
    Kia Carnival:
    Banhxe: 4
    dongco: abc
    Vo: Trang

 
 
*/
var circle_one = {
    x: Math.random() * 500,
    y: Math.random() * 500,
    directionX: 1,
    directionY: 1,
    speed: 10,
    hue: 1,
    radius: 100,
}
var circle_two = {
    x: Math.random() * 500,
    y: Math.random() * 500,
    directionX: 1,
    directionY: 1,
    speed: 10,
    hue: 1,
    radius: 100,
}
var { x, y, radius, directionX, directionY, hue, speed } = circle_one;

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    if (mouse.x) {
        x = mouse.x;
        y = mouse.y;
    }
    if (getDistance(x, y, circle_two.x, circle_two.y) - (circle_one.radius + circle_two.radius) < 0) {
        hue += 5
    }
    // if (y + radius > window.innerHeight || y - radius < 0) {
    //     directionY = directionY * -1
    // }
    // if (x + radius > window.innerWidth || x - radius < 0) {
    //     directionX = directionX * -1
    // }

    // hue++;

    // y += speed * directionY;
    // x += speed * directionX;
    drawCircle();
    drawCircleStatic();
    requestAnimationFrame(animate);

}
animate();

window.addEventListener('mousemove', mousemove)
window.addEventListener('mouseout', mouseout)