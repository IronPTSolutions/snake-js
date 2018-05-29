function Snake(ctx) {
    this.ctx = ctx;

    this.head = new Head(this.ctx);
}

Snake.prototype.move = function(key) {
    switch(key) {
        case KEY_UP:
            this.moveUp();
            break;
        case KEY_RIGHT:
            this.moveRight();
            break;
        case KEY_DOWN:
            this.moveDown();
            break;
        case KEY_LEFT:
            this.moveLeft();
            break;
    }
}

Snake.prototype.moveUp = function() {
    this.head.moveUp();
}

Snake.prototype.moveDown = function () {
    this.head.moveDown();
}

Snake.prototype.moveRight = function () {
    this.head.moveRight();
}

Snake.prototype.moveLeft = function () {
    this.head.moveLeft();
}

Snake.prototype.draw = function () {
    if (this.isReady()) {
        this.head.draw();
    }
}

Snake.prototype.isReady = function () {
    return this.head.isReady();
}