class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        // Class player
        this.player;
        // Clas ball
        this.ball;
        // Class bloque
        this.bloque = [];
        // Game over
        this.isGameOver = false;
    }

    startLoop() {
        //console.log("ha llamado loop");

        // Crear Bola
        this.ball = new Ball(this.canvas);


        const loop = () => {
            //console.log(this.ball.y);
            // Mirar las colisiones
            //this.checkAllCollisions();
            // Ir actualizando Canvas
            this.updateCanvas();
            // Ir refrescando Canvas
            //this.clearCanvas();
            // Llamar a drawCanvas
            this.drawCanvas();

            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }

        }
        window.requestAnimationFrame(loop);
    };


    updateCanvas() {
        this.ball.speed();
        this.ball.updateBall();
        this.ball.colision();
    }

    drawCanvas() {
        // dibujas en el juego
        this.ball.drawBall();

    }

    gameOverCallBack(callback) {
        this.onGameOver = callback;
    }

};