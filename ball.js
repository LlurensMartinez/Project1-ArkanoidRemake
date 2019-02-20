'use strict'

class Ball {
    constructor(canvas, x, y, imgBall) {
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.canvas = canvas;
        //this.color = color;
        this.ctx = this.canvas.getContext('2d');
        this.velocityX = 4;
        this.velocityY = 4;
        this.isFalling = false;

    }

    drawBall() {
        //this.ctx.fillStyle = this.color;
        //this.ctx.beginPath();
        //this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        //this.ctx.fill();
        //this.ctx.closePath();

        var imgBall = new Image();
        imgBall.src = "./images/ball.png";
        this.ctx.drawImage(imgBall, this.x, this.y);
    };


    speed() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }


    changeDirection(collisionType) {
        if (collisionType === 1) {
            this.velocityX *= -1;
        } else {
            this.velocityY *= -1;
        }
    }

    colisionBall() {
        // Colision con Paredes
        if (this.y + this.velocityY < 30) {
            this.velocityY *= -1;
        }
        if (this.x + this.velocityX > this.canvas.width - 30 || this.x + this.velocityX < 30) {
            this.velocityX *= -1;
        }

        const collisonBottom = this.y + this.velocityY > this.canvas.height;
        if (collisonBottom) {
            this.isFalling = true;
        } else {
            this.isFalling = false;
        }
    }
}