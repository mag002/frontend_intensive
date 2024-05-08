var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var circleCount = 2;
var circles = [];

function getDistance(x1, y1, x2, y2) {
    var xDiff = x2 - x1;
    var yDiff = y2 - y1;
    return distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
}

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

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.window.innerHeight;
    for (var i = 0; i < circleCount; i++) {
        var circle = new Circle();
        circles.push(circle)
    }
    animate();

}


function randomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function Circle() {
    this.radius = 150;
    this.x = randomInt(this.radius, window.innerWidth - this.radius);
    this.y = randomInt(this.radius, window.innerHeight - this.radius);
    this.directionX = 1;
    this.directionY = 1;
    this.speed = 10;
    this.hue = 1;
    this.draw = function () {
        console.log('draw')
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue},100%,50%)`;
        // ctx.fill()
        ctx.stroke();
    }
    this.update = function () {
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.directionY = this.directionY * -1
        }
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.directionX = this.directionX * -1
        }

        this.hue++;
        this.y += this.speed * this.directionY;
        this.x += this.speed * this.directionX;
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var j = 0; j < circles.length; j++) {
        circles[j].draw();
        // circles[j].update();
    }

    requestAnimationFrame(animate)
}


window.addEventListener('DOMContentLoaded', init)

// Elastic collision

// all circles: didn't collapse at the beginning
// generate circle position => check previous circle position
// => distance(circl1,circle2)