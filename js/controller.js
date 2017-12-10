class Controller {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        this.snake = new Snake(board_rect);
        this.prey = new Prey(board_rect);
        this.direction = Direction.None;
    }

    changeDirection(new_direction) {
        this.direction = new_direction;
        console.log(this.direction);
    }

    getDataModel() {
        var ui_bricks = [];
        ui_bricks = ui_bricks.concat(this.prey.getDataModel());
        ui_bricks = ui_bricks.concat(this.snake.getDataModel());

        return ui_bricks;
    }
}