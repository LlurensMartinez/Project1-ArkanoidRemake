class Bloque {
    constructor(canvas) {
        this.x = 100;
        this.y = 20;
        this.sizeX = 100;
        this.sizeY = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    drawBloqueWithParams(x, y, color) {
        this.ctx.beginPath();
        this.ctx.rect(this.x + x, this.y + y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();

    }

    drawBloque() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();

    }

    drawBloque2() {
        this.ctx.beginPath();
        this.ctx.rect(this.x + 105, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();

    }
    drawBloque3() {
        this.ctx.beginPath();
        this.ctx.rect(this.x + 210, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();

    }

    drawBloque4() {
        this.ctx.beginPath();
        this.ctx.rect(this.x + 315, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();

    }

    drawBloque5() {
        this.ctx.beginPath();
        this.ctx.rect(this.x + 420, this.y, this.sizeX, this.sizeY);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();

    }

    colision() {

    }
}