function Snake(ctx) {
    this.ctx = ctx;

    this.head = new Head(this.ctx);
    this.body = [
        new BodyPart(this.ctx),
        new BodyPart(this.ctx),
        new BodyPart(this.ctx)
    ];

    this.a();
}

Snake.prototype.a = function() {
    var resourceLoadingIntervalId = setInterval(function() {
        if (this.isReady()) {
            clearInterval(resourceLoadingIntervalId);
            this.restart();
        }
    }.bind(this), 100);
}

Snake.prototype.restart = function() {
    for (var i = 1; i < this.body.length; i++) {
        this.body[i].x = this.body[i - 1].x + this.body[i - 1].width;
    }
    this.head.x = this.body[this.body.length - 1].x + this.body[this.body.length - 1].width;
    this.head.y = this.body[this.body.length - 1].y;
}

Snake.prototype.move = function(key) {
    switch(key) {
        case KEY_UP:
            this.moveBody();
            this.moveUp();
            this.updateSprites();
            break;
        case KEY_RIGHT:
            this.moveBody();
            this.moveRight();
            this.updateSprites();
            break;
        case KEY_DOWN:
            this.moveBody();
            this.moveDown();
            this.updateSprites();
            break;
        case KEY_LEFT:
            this.moveBody();
            this.moveLeft();
            this.updateSprites();
            break;
    }
}

Snake.prototype.moveBody = function() {
    for (var i = 1; i < this.body.length; i++) {
        this.body[i - 1].x = this.body[i].x;
        this.body[i - 1].y = this.body[i].y;
    }
    this.body[this.body.length - 1].x = this.head.x;
    this.body[this.body.length - 1].y = this.head.y;
}

Snake.prototype.updateSprites = function() {
    for (var i = 0; i < this.body.length; i++) {
        this.body[i].updateSprite(this.body[i - 1], this.body[i + 1]);
    }

    this.body[this.body.length - 1].updateSprite(this.body[this.body.length - 2], this.head);
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
        this.body.forEach(function(part) {
            part.draw();
        });
        this.head.draw();
    }
}

Snake.prototype.isReady = function () {
    return this.head.isReady() && this.body[0].isReady();
}