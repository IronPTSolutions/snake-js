function Head(ctx) {
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;

    this.sprite = new Image();
    this.sprite.src = './img/snake-head.sprite.png';
    this.sprite.onload = (function () {
        this.sprite.isReady = true;
        this.sprite.horizontalFrames = 2;
        this.sprite.verticalFrames = 2;
        this.sprite.frameWith = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
        this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
        this.sprite.horizontalFrameIndex = 1;
        this.sprite.verticalFrameIndex = 0;

        this.width = this.sprite.frameHeight;
        this.height = this.sprite.frameHeight;
    }).bind(this);
}

Head.prototype.moveUp = function () {
    this.y -= this.height;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.verticalFrameIndex = 0;
}

Head.prototype.moveDown = function () {
    this.y += this.height;
    this.sprite.horizontalFrameIndex = 1;
    this.sprite.verticalFrameIndex = 1;
}

Head.prototype.moveRight = function () {
    this.x += this.width;
    this.sprite.horizontalFrameIndex = 1;
    this.sprite.verticalFrameIndex = 0;
}

Head.prototype.moveLeft = function () {
    this.x -= this.width;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.verticalFrameIndex = 1;
}

Head.prototype.isReady = function() {
    return this.sprite.isReady;
}

Head.prototype.draw = function() {
    if (this.isReady()) {
        this.ctx.drawImage(
            this.sprite,
            this.sprite.horizontalFrameIndex * this.sprite.frameWith,
            this.sprite.verticalFrameIndex * this.sprite.frameHeight,
            this.sprite.frameWith,
            this.sprite.frameHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}