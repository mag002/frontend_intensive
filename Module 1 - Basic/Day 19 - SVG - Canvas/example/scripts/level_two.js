var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.window.innerHeight;
var ctx = canvas.getContext('2d');
var circleCount = 100;
var circles = [];
function randomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

function init() {
    for (let i = 0; i < circleCount; i++) {
        var radius = randomInt(10, 30);
        var x = randomInt(radius, window.innerWidth - radius);
        var y = randomInt(radius, window.innerHeight - radius);
        if (i !== 0) {
            for (let j = 0; j < circles.length; j++) {
                if (distance(x, y, circles[j].x, circles[j].y) <= radius + circles[j].radius) {
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

function wallCollision(circle) {
    if (circle.x - circle.radius + circle.velocity.x < 0 ||
        circle.x + circle.radius + circle.velocity.x > canvas.width) {
        circle.velocity.x *= -1;
    }
    if (circle.y - circle.radius + circle.velocity.y < 0 ||
        circle.y + circle.radius + circle.velocity.y > canvas.height) {
        circle.velocity.y *= -1;
    }
    if (circle.y + circle.radius > canvas.height) {
        circle.y = canvas.height - circle.radius;
    }
    if (circle.y - circle.radius < 0) {
        circle.y = circle.radius;
    }
    if (circle.x + circle.radius > canvas.width) {
        circle.x = canvas.width - circle.radius;
    }
    if (circle.x - circle.radius < 0) {
        circle.x = circle.radius;
    }
}

function circleCollision() {

    for (let i = 0; i < circles.length - 1; i++) {
        for (let j = i + 1; j < circles.length; j++) {
            let ob1 = circles[i]
            let ob2 = circles[j]
            const xVelocityDiff = ob1.velocity.x - ob2.velocity.x;
            const yVelocityDiff = ob1.velocity.y - ob2.velocity.y;
            const xDist = ob2.x - ob1.x;
            const yDist = ob2.y - ob1.y;
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                let dist = distance(ob1.x, ob1.y, ob2.x, ob2.y)

                if (dist < ob1.radius + ob2.radius) {
                    // tan-1
                    let theta1 = Math.atan2(ob1.velocity.y, ob1.velocity.x);
                    let theta2 = Math.atan2(ob2.velocity.y, ob2.velocity.x);
                    let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
                    let m1 = ob1.mass;
                    let m2 = ob2.mass;
                    // let m1 = 1;
                    // let m2 = 1;
                    let v1 = ob1.speed;
                    let v2 = ob2.speed;

                    let dx1F = (v1 * Math.cos(theta1 - phi) * (m1 - m2) + 2 * m2 * v2 * Math.cos(theta2 - phi)) / (m1 + m2) * Math.cos(phi) + v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
                    let dy1F = (v1 * Math.cos(theta1 - phi) * (m1 - m2) + 2 * m2 * v2 * Math.cos(theta2 - phi)) / (m1 + m2) * Math.sin(phi) + v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
                    let dx2F = (v2 * Math.cos(theta2 - phi) * (m2 - m1) + 2 * m1 * v1 * Math.cos(theta1 - phi)) / (m1 + m2) * Math.cos(phi) + v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
                    let dy2F = (v2 * Math.cos(theta2 - phi) * (m2 - m1) + 2 * m1 * v1 * Math.cos(theta1 - phi)) / (m1 + m2) * Math.sin(phi) + v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

                    ob1.velocity.x = dx1F;
                    ob1.velocity.y = dy1F;
                    ob2.velocity.x = dx2F;
                    ob2.velocity.y = dy2F;

                    // staticCollision(ob1, ob2)

                }
            }

        }
        wallCollision(circles[i]);
    }

    if (circles.length > 0)
        wallCollision(circles[circles.length - 1])
}
function Circle(index, x, y, rad) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
    }
    this.speed = 2;
    this.hue = 1;
    this.radius = rad;
    this.mass = this.radius * this.radius * this.radius
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `hsl(${this.hue},100%,50%)`;
        ctx.fillStyle = `hsl(${this.hue},100%,50%)`;
        ctx.fill()
        ctx.stroke();
    }

    this.update = function () {
        // circles.forEach(circle => {
        //     if (this.index === circle.index) {
        //         return
        //     }
        //     if (distance(this.x, this.y, circle.x, circle.y) <= this.radius + circle.radius) {
        //         this.directionY = this.directionY * -1
        //         this.directionX = this.directionX * -1
        //         circle.directionY = circle.directionY * -1
        //         circle.directionX = circle.directionX * -1
        //     }
        // });
        circleCollision()
        // if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0) {
        //     this.velocity.y = this.velocity.y * -1
        // }
        // if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0) {
        //     this.velocity.x = this.velocity.x * -1
        // }

        // this.hue++;

        this.y += this.speed * this.velocity.y;
        this.x += this.speed * this.velocity.x;
    }
}

window.addEventListener('DOMContentLoaded', init)