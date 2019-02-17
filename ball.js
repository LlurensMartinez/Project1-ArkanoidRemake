class Ball {
    constructor(canvas, x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.canvas = canvas;
        this.color = color;
        this.ctx = this.canvas.getContext('2d');
        this.velocityX = 2;
        this.velocityY = 2;
    }

    drawBall() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
    };


    speed() {
        this.drawBall();
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

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBall();
        this.x += this.velocityX;
        this.y += this.velocityY;
        if (this.y + this.velocityY < 15) {
            this.velocityY *= -1;
        }
        if (this.x + this.velocityX > this.canvas.width || this.x + this.velocityX < 0) {
            this.velocityX *= -1;
        }
        if (this.y + this.velocityY > this.canvas.height) {
            return 'gameOver';
        }
    }
}