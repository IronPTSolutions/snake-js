function Head(ctx) {
    Drawable.call(this, ctx, './img/snake-head.sprite.png', 2, 2);
    this.sprite.verticalFrameIndex = 0;    
    this.sprite.horizontalFrameIndex = 1;
}

Head.prototype = Object.create(Drawable.prototype);
Head.prototype.constructor = Head;

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