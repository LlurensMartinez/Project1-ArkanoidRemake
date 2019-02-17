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
        this.ball = new Ball(this.canvas, 150, 300, "blue");
        this.player = new Player(this.canvas, 500, 500, "blue");

        let colors = ["red", "yellow", "blue"];
        let rows = 8;
        let cols = 5;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                this.bloque.push(new Bloque2(
                    this.canvas,
                    75 + 105 * col,
                    50 + 25 * row,
                    colors[col % colors.length]
                ));
            }
        }


        const loop = () => {
            //console.log(this.ball.y);
            // Mirar las colisiones
            this.checkAllCollisions();
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
        this.ball.colisionBall();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.x, this.y);
    }

    drawCanvas() {
        // dibujas en el juego
        this.ball.drawBall();
        this.player.drawPlayer();
        for (let block = 0; block < this.bloque.length; block++) {
            this.bloque[block].draw();
        }
    }

    gameOverCallBack(callback) {
        this.onGameOver = callback;
    }

    checkAllCollisions() {
        //this.player.checkScreen();
        let blocksToRemove = [];
        this.bloque.forEach((bloque, index) => {
            let collision = bloque.checkCollision(this.ball);
            if (collision != 0) {
                // marcar para eliminar el bloque del array this.bloque
                //console.log(collision);
                blocksToRemove.push(index);
                // cambiar la direccion de la pelota en base al tipo de colision
                this.ball.changeDirection(collision);
            }
        });

        let blocksRemoved = 0;
        blocksToRemove.forEach((blockToRemove) => {
            this.bloque.splice(blockToRemove - blocksRemoved, 1);
            blocksRemoved++;

        });


        // si hay algun bloque marcado para eliminar, eliminarlos del this.bloque


        // COLISION CON BARRA PLAYER
        let collision2 = this.player.checkCollisionPlayer(this.ball);
        if (collision2 != 0) {
            this.ball.changeDirection(collision2);

        }
        // CONDICIONES PARA EL GAME OVER
        if (this.ball.colisionBall() === 'gameOver') {
            this.isGameOver = true;
            this.onGameOver();
        }
    }


}