function Tail(ctx) {
    Drawable.call(this, ctx, './img/snake-tail.sprite.png', 2, 2);
    this.sprite.verticalFrameIndex = 0;      
    this.sprite.horizontalFrameIndex = 1;
}

Tail.prototype = Object.create(Drawable.prototype);
Tail.prototype.constructor = Tail;

Tail.prototype.updateSprite = function (next) {
    if (next.y === this.y) {
        if (this.x < next.x) {
            this.sprite.verticalFrameIndex = 0;
            this.sprite.horizontalFrameIndex = 1;
        } else {
            this.sprite.verticalFrameIndex = 1;
            this.sprite.horizontalFrameIndex = 0;
        }
    } else if (next.y > this.y) {
        this.sprite.verticalFrameIndex = 1;
        this.sprite.horizontalFrameIndex = 1;
    } else {
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrameIndex = 0;
    }
}