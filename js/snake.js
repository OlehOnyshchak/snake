class Snake {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        this.direction = Direction.None;
        
        var head = {};
        head.left = board_rect.getWidth() / 2;
        head.top = board_rect.getHeight() / 2;

        var head_brick = new Brick(head.left, head.top);
        // TODO: is there some kind of static member data field?
        var offset = head_brick.getOffset();
        this.body = [head_brick, new Brick(head.left + offset, head.top)];
    }

    setDirection(new_direction) {
        if ((new_direction === Direction.Down && this.direction === Direction.Up) ||
            (new_direction === Direction.Up && this.direction === Direction.Down) ||
            (new_direction === Direction.Left && this.direction === Direction.Right) ||
            (new_direction === Direction.Right && this.direction === Direction.Left) ||
            (new_direction === Direction.Right && this.direction === Direction.None)) 
        {
            // moving in oposite direction is forbidden
            return;
        }

        this.direction = new_direction;
    }

    getDataModel() {
        const color = "green";
        var bricks = [];

        this.body.forEach(function(item) {
            bricks.push(new UiBrick(item, color));
        });

        return bricks;
    }

    performUpdate() {
        var head = this.body[0].getRect();
        var offset = this.body[0].getOffset();
        var new_head = {};
        switch(this.direction) {
            case Direction.Down:
                new_head.left = head.left;
                new_head.top = (head.bottom + offset <= this.board_rect.bottom) ? 
                    head.bottom : this.board_rect.top;
                break;
            case Direction.Left:
                new_head.left = (head.left - offset >= this.board_rect.left) ?
                    head.left - offset : this.board_rect.right - offset;

                new_head.top = head.top;
                break;
            case Direction.Right:
                new_head.left = (head.right + offset <= this.board_rect.right) ?
                    head.right : this.board_rect.left;

                new_head.top = head.top;
                break;
            case Direction.Up:
                new_head.left = head.left;
                new_head.top = (head.top - offset >= this.board_rect.top) ? 
                    head.top - offset : this.board_rect.bottom - offset;
                break;
            case Direction.None:
                // snake is static
                return;
        }
        
        this.body.pop();
        this.body.unshift(new Brick(new_head.left, new_head.top));
    }
}