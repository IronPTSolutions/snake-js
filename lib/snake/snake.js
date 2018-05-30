function Snake(ctx) {
    this.ctx = ctx;

    this.tail = new Tail(ctx);
    this.body = [
        new BodyPart(this.ctx)
    ];
    this.head = new Head(this.ctx);
    
    this.init();
}

Snake.prototype.init = function() {
    var resourceLoadingIntervalId = setInterval(function() {
        if (this.isReady()) {
            clearInterval(resourceLoadingIntervalId);
            this.restart();
        }
    }.bind(this), 100);
}

Snake.prototype.restart = function() {
    this.state = 0;
    this.body[0].x = this.tail.x + this.tail.width;
    for (var i = 1; i < this.body.length; i++) {
        this.body[i].x = this.body[i - 1].x + this.body[i - 1].width;
    }
    this.head.x = this.body[this.body.length - 1].x + this.body[this.body.length - 1].width;
    this.head.y = this.body[this.body.length - 1].y;
}

Snake.prototype.addBodyPart = function() {
    var part = new BodyPart(this.ctx);
    part.x = this.body[this.body.length - 1].x;
    part.y = this.body[this.body.length - 1].y;
    part.sprite.verticalFrameIndex = this.body[this.body.length - 1].sprite.verticalFrameIndex;
    part.sprite.horizontalFrameIndex = this.body[this.body.length - 1].sprite.horizontalFrameIndex;
    this.body.push(part);
    this.updateSprites();
}

Snake.prototype.move = function(key) {
    switch(key) {
        case KEY_UP:
            this.moveBody();
            this.head.moveUp();
            this.updateSprites();
            this.state = KEY_UP;
            break;
        case KEY_RIGHT:
            this.moveBody();
            this.head.moveRight();
            this.updateSprites();
            this.state = KEY_RIGHT;
            break;
        case KEY_DOWN:
            this.moveBody();
            this.head.moveDown();
            this.updateSprites();
            this.state = KEY_DOWN;
            break;
        case KEY_LEFT:
            this.moveBody();
            this.head.moveLeft();
            this.updateSprites();
            this.state = KEY_LEFT;
            break;
    }
}

Snake.prototype.moveBody = function() {
    this.tail.x = this.body[0].x;
    this.tail.y = this.body[0].y;

    for (var i = 1; i < this.body.length; i++) {
        this.body[i - 1].x = this.body[i].x;
        this.body[i - 1].y = this.body[i].y;
    }
    this.body[this.body.length - 1].x = this.head.x;
    this.body[this.body.length - 1].y = this.head.y;
}

Snake.prototype.updateSprites = function() {
    this.tail.updateSprite(this.body[0]);
    
    var prev = this.tail;
    var next;
    for (var i = 0; i < this.body.length; i++) {
        next = (i === this.body.length - 1) ? this.head : this.body[i + 1];
        this.body[i].updateSprite(prev, next);
        prev = this.body[i];
    }

}

Snake.prototype.collide = function(elements) {
    collition = elements.some((function (e) {
        return e.collide(this.head);
    }).bind(this));

    return collition;
}

Snake.prototype.draw = function() {
    if (this.isReady()) {
        this.body.forEach(function(part) {
            part.draw();
        });
        this.head.draw();
        this.tail.draw();

        this.move(this.state);
    }
}

Snake.prototype.isReady = function() {
    return this.head.isReady() && this.body[0].isReady() && this.tail.isReady();
}