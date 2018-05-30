function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    this.drawIntervalId = undefined;
    this.fps = 7;

    this.snake = new Snake(this.ctx);
    this.fruits = [];
    this.framesCount = 0;
}

Game.prototype.start = function() {
    if (!this.drawIntervalId) {
        this.drawIntervalId = setInterval(function() {
            this.draw();
            
            this.framesCount++;            
            if (this.framesCount === 30) {
                this.addFruit();
                this.framesCount = 0;
            }

            var fruit = this.snake.collide(this.fruits);
            if (fruit) {
                this.snake.addBodyPart();
                this.deleteFruit(fruit);
            }

        }.bind(this), 1000 / this.fps);
    }
}

Game.prototype.stop = function() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.onKeyDown = function (key) {
    this.snake.move(key);
}

Game.prototype.addFruit = function() {
    if (this.isRunning()) {
        var fruit = new Fruit(this.ctx);
        fruit.x = Math.floor(Math.random() * this.canvas.width);
        fruit.y = Math.floor(Math.random() * this.canvas.height);
        this.fruits.push(fruit)
    }
}

Game.prototype.deleteFruit = function(fruit) {
    this.fruits = this.fruits.filter(function(f) {
        return f.x === fruit.x && f.y === f.y;
    })
}

Game.prototype.isRunning = function () {
    return this.drawIntervalId !== undefined;
}

Game.prototype.draw = function () {
    this.clear();
    this.snake.draw();
    this.fruits.forEach(function (fruit) {
        fruit.draw();
    })
}

