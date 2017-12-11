class Prey {
    constructor(board_rect, snake_rect) {
        this.board_rect = Object.assign(board_rect);
        this.placeOnBoard(snake_rect);
    }

    getLocation() {
        return this.location.getRect();
    }

    getDataModel() {
        const color = "red";
        return [new UiBrick(this.location, color)];
    }

    placeOnBoard(snake_rect) {
        // TODO: fix bug with some offset of prey comparing with snake location
        var offset = getBrickOffset();
        var grid_dimention = getGridDimention(this.board_rect, offset);
        var available_location = false;
        var brick;
        while (!available_location) {
            var cell = {};
            cell.x = Math.floor(Math.random() * grid_dimention.x);
            cell.y = Math.floor(Math.random() * grid_dimention.y);

            brick = new Brick(cell.x * offset, cell.y * offset);
            var brick_rect = brick.getRect();
            for (var i = 0; i < snake_rect.length; ++i) {
                var body_rect = snake_rect[i].getRect();
                if (!body_rect.isOverlapped(brick_rect)) {
                    available_location = true;
                    break;
                }
            }
        }

        this.location = brick;
    }
}