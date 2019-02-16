'use strict'

class Bloque2 {
    constructor(canvas, x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.sizeX = 100;
        this.sizeY = 20;
        this.xMax = x + 100;
        this.yMax = y + 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();

    }

    getAbsoluteDistance(blockPostion, ballPosition) {
        let distance = blockPostion - ballPosition;
        if (distance < 0) {
            distance = distance * -1;
        }
        return distance;
    }

    checkCollision(ball) {

        if (ball.x + ball.radius >= this.x && ball.x - ball.radius <= this.xMax) {

            if (ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.yMax) {
                // console.log('posible colision vertical');
                let typeOfCollision = 1;
                let minDistance = this.getAbsoluteDistance(this.x, ball.x + ball.radius);

                let currentDistance = this.getAbsoluteDistance(this.y, ball.y + ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 2;
                    minDistance = currentDistance;
                }

                currentDistance = this.getAbsoluteDistance(this.xMax, ball.x - ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 1;
                    minDistance = currentDistance;
                }

                currentDistance = this.getAbsoluteDistance(this.yMax, ball.y - ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 2;
                    minDistance = currentDistance;
                }

                return typeOfCollision;
            }

        }

        return 0;
    }
}