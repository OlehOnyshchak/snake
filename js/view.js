var controller = new Controller();

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

document.addEventListener("keydown", OnKeyDown);