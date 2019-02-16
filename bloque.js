class Bloque {
    constructor(canvas) {
        this.x;
        this.y;
        this.sizeX;
        this.sizeY;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    drawBloque() {
        this.ctx.beginPath();
        this.ctx.rect(100, 100, 100, 20);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();

    }

    colision() {

    }
}