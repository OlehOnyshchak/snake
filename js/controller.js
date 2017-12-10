class Controller {
    constructor(board_rect) {
        this.board_rect = DeepCopy(board_rect);
        this.snake = new Snake(board_rect);
        this.prey = new Prey(board_rect);
        this.direction = Direction.None;
    }

    changeDirection(new_direction) {
        this.direction = new_direction;
        console.log(this.direction);
    }
}