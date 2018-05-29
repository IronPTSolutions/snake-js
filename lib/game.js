function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext('2d');

    this.snake = new Snake(this.ctx);
    this.drawIntervalId = undefined;
    this.fps = 60;
}

Game.prototype.start = function() {
    if (!this.drawIntervalId) {
        this.drawIntervalId = setInterval(function() {
            this.draw();
        }.bind(this), 1000 / this.fps);
    }
}

Game.prototype.stop = function() {
    clearInterval(this.drawIntervalId);
}

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.onKeyDown = function (key) {
    this.snake.move(key);
}

Game.prototype.draw = function () {
    this.clear();
    this.snake.draw();
}

