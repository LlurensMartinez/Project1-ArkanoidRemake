class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.ball = ball;
        this.bloque = [];
        this.isGameOver = false;
    }

    startLoop() {
        //console.log("out of loop");

        const loop = () => {
            // Mirar las colisiones
            this.checkAllCollisions();
            // Ir actualizando Canvas
            this.updateCanvas();
            // Ir refrescando Canvas
            this.clearCanvas();
            // Ir dibujando canvas
            this.drawCanvas();

            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }

        }
        window.requestAnimationFrame(loop);
    };

    onGameOver() {


    }

    update() {

    }

    draw() {

    }

};