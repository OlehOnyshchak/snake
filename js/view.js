var OnKeyDown = function(event) {
    switch (event.key) {
        case "ArrowRight":
            controller.changeDirection(Direction.Right);
            break;
        case "ArrowLeft":
            controller.changeDirection(Direction.Left);
            break;
        case "ArrowDown":
            controller.changeDirection(Direction.Down);
            break;
        case "ArrowUp":
            controller.changeDirection(Direction.Up);
            break;
        case "Escape":
            // TODO: implement pause
            break;
        default:
            break;
    }
};

var GetCanvas = function() {
    return document.getElementById("canvas");
};

var draw = function() {
    if (controller.isGameOver()) {
        alert("Game Over!");
        controller.startNewGame();
    }

    var ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.clearRect(canvas_rect.left, canvas_rect.top,
                      canvas_rect.width, canvas_rect.height);

        var ui_bricks = controller.getDataModel();
        ui_bricks.forEach(function(item) {
            ctx.fillStyle = item.getFillStyle();
            var rect = item.getRect();
            ctx.fillRect(rect.left, rect.top, rect.getWidth(), rect.getHeight());
        });
    }

    window.requestAnimationFrame(draw);
};

const width = 20;
const height = 20;
var canvas = GetCanvas();
var offset = getBrickOffset();
// TODO: fix bug with incorrect canvas size.
// it should be precisly divisible by offset
canvas.width = width * offset;
canvas.height = height * offset;

var canvas_rect = canvas.getBoundingClientRect();
var controller = new Controller(new Rect(
    canvas_rect.left, canvas_rect.top, canvas_rect.right, canvas_rect.bottom));

// TODO: query interval from controller
window.setInterval(function() {
    controller.performUpdate();
}, 100);

document.addEventListener("keydown", OnKeyDown);
window.requestAnimationFrame(draw);