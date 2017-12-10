class Controller {
    constructor() {
        this.direction = Direction.None;
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
        console.log(this.direction);
    }
}