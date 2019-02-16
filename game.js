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
        this.player = new Player(this.canvas);
        this.bloque = new Bloque(this.canvas);


        const loop = () => {
            //console.log(this.ball.y);
            // Mirar las colisiones
            //this.checkAllCollisions();
            // Ir actualizando Canvas
            this.updateCanvas();
            // Ir refrescando Canvas
            this.clearCanvas();
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
        //this.ball.updateBall();
        this.ball.colisionBall();

        this.player.speedPlayer();
        //this.player.updatePlayer();
        this.player.colisionPlayer();
        this.player.setDirection();



    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.x, this.y);
    }

    drawCanvas() {
        // dibujas en el juego
        this.ball.drawBall();
        this.player.drawPlayer();
        this.bloque.drawBloque();
    }

    gameOverCallBack(callback) {
        this.onGameOver = callback;
    }

};