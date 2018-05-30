function BodyPart(ctx) {
    Drawable.call(this, ctx, './img/snake-body.sprite.png', 3, 3);
    this.sprite.verticalFrameIndex = 0;      
    this.sprite.horizontalFrameIndex = 1;
}

BodyPart.prototype = Object.create(Drawable.prototype);
BodyPart.prototype.constructor = BodyPart;

BodyPart.prototype.updateSprite = function (prev, next) {
    prev = prev ? prev : { x: 0, y: 0};
    next = next ? next : { x: Math.max(), y: Math.max() };

    if (next.x === this.x && prev.x === this.x) {
        this.sprite.verticalFrameIndex = 1;
        this.sprite.horizontalFrameIndex = 2;
    } else if (next.y === this.y && prev.y === this.y) {
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrameIndex = 1;
    } else if (next.y > this.y && prev.y < this.y) {
        this.sprite.verticalFrameIndex = 1;
        this.sprite.horizontalFrameIndex = 2;
    } else if (next.y === this.y && prev.y < this.y) {
        if (this.x === prev.x && this.x < next.x) {
            this.sprite.verticalFrameIndex = 1;
            this.sprite.horizontalFrameIndex = 0;
        } else if (this.x === prev.x && this.x > next.x) {
            this.sprite.verticalFrameIndex = 2;
            this.sprite.horizontalFrameIndex = 2;
        }
    } else if (next.y < this.y && prev.y === this.y) {
        if (this.x === next.x && this.x > prev.x) {
            this.sprite.verticalFrameIndex = 2;
            this.sprite.horizontalFrameIndex = 2;
        } else if (this.x === next.x && this.x < prev.x) {
            this.sprite.verticalFrameIndex = 1;
            this.sprite.horizontalFrameIndex = 0;
        }
    } else if (next.y === this.y && prev.y > this.y) {
        if (this.x > next.x && this.x === prev.x) {
            this.sprite.verticalFrameIndex = 0;
            this.sprite.horizontalFrameIndex = 2;
        } else if (this.x < next.x && this.x === prev.x) {
            this.sprite.verticalFrameIndex = 0;
            this.sprite.horizontalFrameIndex = 0;
        }
    } else if (next.y > this.y && prev.y === this.y) {
        if (this.x === next.x && this.x < prev.x) {
            this.sprite.verticalFrameIndex = 0;
            this.sprite.horizontalFrameIndex = 0;
        } else if (this.x === next.x && this.x > prev.x) {
            this.sprite.verticalFrameIndex = 0;
            this.sprite.horizontalFrameIndex = 2;
        }
    } else {
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrameIndex = 1;
    }
}