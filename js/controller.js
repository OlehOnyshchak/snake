class Controller {
    constructor(boardRect) {
        this.boardRect = DeepCopy(boardRect);
        this.snake = new Snake(boardRect);
        this.prey = new Prey(boardRect);
        this.direction = Direction.None;
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
        console.log(this.direction);
    }
}