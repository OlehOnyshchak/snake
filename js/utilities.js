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
}

const brick_offset = 15;
var getBrickOffset = function() {
    return brick_offset;
}

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