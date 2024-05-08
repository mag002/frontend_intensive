var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.window.innerHeight;
var ctx = canvas.getContext('2d');
var circleCount = 20;
var circles = [];

let mouse = {
    x: undefined,
    y: undefined,
}
function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}
function mouseout() {
    console.log('out')
    mouse.x = undefined;
    mouse.y = undefined;
}

function getAngle(x1, y1, x2, y2) {
    // Splope calculation and the relation between slop and degree
    // tan(phi) = (y2-y2)/(x2-x1) => phi = tan-1(m) with tan-1 equal Math.atan2
    let rad = Math.atan2(x2 - x1, y2 - y1);
    return (rad * 180) / Math.PI
}

function resizeReset() {

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}
function randomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function init() {
    for (i = 0; i < circleCount; i++) {
        var radius = 50;
        var x = randomInt(radius, window.innerWidth - radius);
        var y = randomInt(radius, window.innerHeight - radius);
        if (i !== 0) {
            for (var j = 0; j < circles.length; j++) {
                if (distance(x, y, circles[j].x, circles[j].y) <= radius + circles[j].rad) {
                    var x = randomInt(radius, window.innerWidth - radius);
                    var y = randomInt(radius, window.innerHeight - radius);


                    j = -1;
                }
            }

        }
        circles.push(new Circle(i, x, y, radius))
    }
    animate();

}

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    circles.forEach(circle => {
        circle.update();
        circle.draw();
    });
    requestAnimationFrame(animate);
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function Circle(index, x, y, rad) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
    }
    this.speed = 10;
    this.hue = 1;
    this.radius = rad;
    this.angle = randomInt(-10, 10);
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue},100%,50%)`;
        ctx.fill()
        ctx.stroke();
    }

    this.update = function () {
        if (mouse.x !== undefined) {
            this.angle = getAngle(this.x, this.y, mouse.x, mouse.y)
        } else {
            // This line will make the circle run curvely 
            this.angle += randomInt(-10, 10);
        }
        this.radian = (Math.PI / 180) * this.angle;

        // sin doi/huyen , cos ke/huyen
        this.x += this.speed * Math.sin(this.radian);
        this.y += this.speed * Math.cos(this.radian);


        if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0) {
            this.angle += 90;

        }
        if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0) {
            this.angle += 90;

        }
        this.hue++;

        // this.y += this.speed * this.velocity.y;
        // this.x += this.speed * this.velocity.x;
    }
}

window.addEventListener('DOMContentLoaded', init)
window.addEventListener('resize', resizeReset)
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseout', mouseout);