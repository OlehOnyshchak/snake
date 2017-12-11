class Controller {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        this.snake = new Snake(board_rect);
        this.prey = new Prey(board_rect, this.snake.getLocation());
    }

    changeDirection(new_direction) {
        this.snake.setDirection(new_direction);
    }

    getDataModel() {
        var ui_bricks = [];
        ui_bricks = ui_bricks.concat(this.prey.getDataModel());
        ui_bricks = ui_bricks.concat(this.snake.getDataModel());

        return ui_bricks;
    }

    performUpdate() {
        this.snake.move();
        if (this.snake.hasSwallowed(this.prey.getLocation())) {
            this.prey.placeOnBoard(this.snake.getLocation());
        }
    }
}