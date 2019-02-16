class Player {
    constructor(canvas) {
        this.x = 200;
        this.y = 520;
        this.sizeX = 100;
        this.sizeY = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.velocityX = 2;
        this.direction = 0;
        this.speed = 5;
    }

    drawPlayer() {
        this.x = this.x + 10 * this.direction;
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x + this.sizeX > this.canvas.width) {
            this.x = this.canvas.width - this.sizeX;
        }
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);

    };

    setDirection(direction) {
        this.direction = direction;
    }

    checkScreen() {
        if (this.x - this.sizeX / 2 <= 0) {
            this.direction = 1
        } else if (this.x + this.sizeX / 2 >= this.canvas.weight) {
            this.direction = -1;
        };
    };

    rightPressed() {
        //if (this.direction === 0) {
        this.direction = 1;
        //}

    }

    leftPressed() {
        //if (this.direction === 0) {
        this.direction = -1;
        //}
    }

    cancelRightPressed() {
        this.direction = 0;
    }

    cancelLeftPressed() {
        //if (this.direction === -1) {
        this.direction = 0;
        //}
    }

    updatePlayer() {

        this.x = this.x + this.direction * this.speed;

    }

    colisionPlayer() {

        // Colision con Paredes

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPlayer();
        this.x += this.velocityX;

        if (this.x + this.velocityX > this.canvas.width || this.x + this.velocityX < 0) {
            this.velocityX *= -1;
        }
    }
}