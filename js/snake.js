class Snake {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        var tail_x = board_rect.getWidth() / 2;
        var tail_y = board_rect.getHeight() / 2;

        this.body = [new Brick(tail_x, tail_y), new Brick(tail_x + 1, tail_y)];
    }

    getDataModel() {
        const color = "green";
        var bricks = [];

        this.body.forEach(function(item) {
            bricks.push(new UiBrick(item, color));
        });

        return bricks;
    }
}