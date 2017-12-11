class Snake {
    constructor(board_rect) {
        this.board_rect = Object.assign(board_rect);
        this.direction = Direction.None;

        var offset = getBrickOffset();
        var head = {};
        
        var grid_dimention = getGridDimention(board_rect, offset);
        head.left = board_rect.left + Math.floor(grid_dimention.x / 2) * offset;
        head.top = board_rect.top + Math.floor(grid_dimention.y / 2) * offset;

        this.body = [new Brick(head.left, head.top), new Brick(head.left + offset, head.top)];
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

    move() {
        var head = this.body[0].getRect();
        var offset = getBrickOffset();
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

    hasSwallowed(prey_rect) {
        var has_swallowed = false;
        for (var i = 0; i < this.body.length; ++i) {
            var body_rect = this.body[i].getRect();
            if (body_rect.isOverlapped(prey_rect)) {
                has_swallowed = true;
                break;
            }
        }

        return has_swallowed;
    }

    getLocation() {
        var rect_colletion = [];
        this.body.forEach(function(item) {
            // TODO: do we need to use `new` here?
            rect_colletion.push(item);
        });

        return rect_colletion;
    }
}