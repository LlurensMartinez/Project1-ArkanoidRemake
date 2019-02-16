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

    checkCollision(ball) {

        if (ball.x >= this.x && ball.x <= this.xMax) {
            console.log('posible colision vertical');
        }
        if (ball.y >= this.y && ball.y <= this.yMax) {
            console.log('posible colision horizontal');
        }
        return 0;
    }
}