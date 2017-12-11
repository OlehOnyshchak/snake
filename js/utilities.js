class Rect {
    constructor(left, top, right, bottom) {
        // TODO: check for negative values
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }

    getWidth() {
        return this.right - this.left;
    }

    getHeight() {
        return this.bottom - this.top;
    }

    isOverlapped(rect) {
        var absolute_match = this.left == rect.left && this.right == rect.right &&
                                          this.top == this.top && this.bottom == rect.bottom;

        var is_horizontal_overlapping = (this.left < rect.right && this.left > rect.left) ||
                                        (this.right < rect.right && this.right > rect.left);
        var is_vertical_overlapping = (this.top < rect.bottom && this.top > rect.top) ||
                                        (this.bottom < rect.bottom && this.bottom > rect.top);
        
        return absolute_match || (is_horizontal_overlapping && is_vertical_overlapping);
    }
}

const brick_offset = 15;
var getBrickOffset = function() {
    return brick_offset;
};

var getGridDimention = function(real_rect, cell_dimention) {
    var grid_dimention = {};
    grid_dimention.x = Math.floor(real_rect.getWidth() / cell_dimention);
    grid_dimention.y = Math.floor(real_rect.getHeight() / cell_dimention);

    return grid_dimention;
};

// The smallest differentiated element during
// construction of any UI element 
class Brick {
    constructor(left, top) {
        this.offset = getBrickOffset();

        var right = left + this.offset;
        var bottom = top + this.offset;
        this.rect = new Rect(left, top, right, bottom);
    }

    getRect() {
        return this.rect;
    }
}

// TODO: check whether it conveniate to have class UiBrick extends Brick.
// Logically, it should be so.
// TODO: consider better name for this. Data models as snake shouldn't have
// anything related to View, even with names
class UiBrick {
    constructor(brick, fill_style) {
        this.brick = Object.assign(brick);
        this.fill_style = fill_style;
    }

    getRect() { 
        return this.brick.getRect();
    }

    getFillStyle() {
        return this.fill_style;
    }
}

var Direction = {
    "None"  : "None",
    "Left"  : "Left",
    "Up"    : "Up",
    "Right" : "Right",
    "Down"  : "Down"
};