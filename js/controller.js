class Controller {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        this.startNewGame();
    }

    // TODO: add board_rect parameter here to support custom board size
    startNewGame() {
        this.is_game_over = false;
        this.snake = new Snake(this.board_rect);
        this.prey = new Prey(this.board_rect, this.snake.getLocation());
    }

    isGameOver() {
        return this.is_game_over;
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
        if (this.snake.hasSwallowedItself()) {
            // we shouldn't set it to false once snake swallowed itself
            this.is_game_over = true;
        }

        if (this.snake.hasSwallowed(this.prey.getLocation())) {
            this.snake.growUp();
            this.prey.placeOnBoard(this.snake.getLocation());
        }
    }
}