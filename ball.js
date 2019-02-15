class Ball {
    constructor(canvas) {
        this.x = 100;
        this.y = 100;
        this.radius = 15;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.velocityX = 2;
        this.velocityY = 1;
    }

    drawBall() {
        this.ctx.fillStyle = 'red';
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



    updateBall() {

        this.ctx.clearRect(0, 0, this.x, this.y);

    }

    colisionBall() {

        // Colision con Paredes

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBall();
        this.x += this.velocityX;
        this.y += this.velocityY;
        if (this.y + this.velocityY > this.canvas.height - 15 || this.y + this.velocityY < 15) {
            this.velocityY *= -1;
        }
        if (this.x + this.velocityX > this.canvas.width - 15 || this.x + this.velocityX < 15) {
            this.velocityX *= -1;
        }
    }
}