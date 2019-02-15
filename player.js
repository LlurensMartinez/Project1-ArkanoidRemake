class Player {
    constructor(canvas) {
        this.x = 100;
        this.y = 100;
        this.sizeX = 100;
        this.sizeY = 20;
        this.positionX = 200;
        this.positionY = 450;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.velocityX = 2;
    }

    drawPlayer() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.positionX, this.positionY, this.sizeX, this.sizeY);

    };


    speedPlayer() {



    }



    updatePlayer() {

        this.ctx.clearRect(0, 0, this.x, this.y);

    }

    colisionPlayer() {

        // Colision con Paredes

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPlayer();
        this.x += this.velocityX;
        this.y += this.velocityY;
        if (this.y + this.velocityY > this.canvas.height || this.y + this.velocityY < 0) {
            this.velocityY *= -1;
        }
        if (this.x + this.velocityX > this.canvas.width || this.x + this.velocityX < 0) {
            this.velocityX *= -1;
        }
    }
}