class Player {
    constructor(canvas) {
        this.x = 200;
        this.y = 520;
        this.sizeX = 100;
        this.sizeY = 20;
        this.xMax = this.x + 100;
        this.yMax = this.y + 20;
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
        this.direction = 1;
    }

    leftPressed() {
        this.direction = -1;

    }

    cancelRightPressed() {
        this.direction = 0;
    }

    cancelLeftPressed() {
        this.direction = 0
    }


    checkCollisionPlayer(ball) {

        if (ball.x + ball.radius >= this.x && ball.x - ball.radius <= this.xMax) {

            if (ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.yMax) {
                // console.log('posible colision vertical');
                let typeOfCollision = 1;
                let minDistance = this.getAbsoluteDistance(this.x, ball.x + ball.radius);

                let currentDistance = this.getAbsoluteDistance(this.y, ball.y + ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 2;
                    minDistance = currentDistance;
                }

                currentDistance = this.getAbsoluteDistance(this.xMax, ball.x - ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 1;
                    minDistance = currentDistance;
                }

                currentDistance = this.getAbsoluteDistance(this.yMax, ball.y - ball.radius);
                if (currentDistance < minDistance) {
                    typeOfCollision = 2;
                    minDistance = currentDistance;
                }

                return typeOfCollision;
            }

        }

        return 0;
    }

    getAbsoluteDistance(playerPostion, ballPosition) {
        let distance = playerPostion - ballPosition;
        if (distance < 0) {
            distance = distance * -1;
        }
        return distance;
    }

}