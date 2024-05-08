var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.window.innerHeight;
var ctx = canvas.getContext('2d');
var circleCount = 20;
var circles = [];
function randomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function init() {
    for (i = 0; i < circleCount; i++) {
        var radius = 50;
        var x = randomInt(radius, window.innerWidth - radius);
        var y = randomInt(radius, window.innerHeight - radius);
        // Skip the loop to check collapse
        if (i !== 0) {
            // Loop run through every circle created to check the distance
            // if the distance is not valid
            // j = -1 then become 0 after the loop finish => make the j-loop run from the begining again
            for (var j = 0; j < circles.length; j++) {
                if (distance(x, y, circles[j].x, circles[j].y) <= radius + circles[j].rad) {
                    x = randomInt(radius, window.innerWidth - radius);
                    y = randomInt(radius, window.innerHeight - radius);
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
    this.rad = rad;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue},100%,50%)`;
        ctx.fill()
        ctx.stroke();
    }

    this.update = function () {
        if (this.y + this.rad >= window.innerHeight || this.y - this.rad <= 0) {
            this.velocity.y = this.velocity.y * -1
        }
        if (this.x + this.rad >= window.innerWidth || this.x - this.rad <= 0) {
            this.velocity.x = this.velocity.x * -1
        }

        this.hue++;

        this.y += this.speed * this.velocity.y;
        this.x += this.speed * this.velocity.x;
    }
}

window.addEventListener('DOMContentLoaded', init)