function Fruit(ctx) {
    Drawable.call(this, ctx, './img/fruits.sprite.png', 3, 3);
    this.sprite.verticalFrameIndex = Math.floor(Math.random() * 3);      
    this.sprite.horizontalFrameIndex = Math.floor(Math.random() * 3);
}

Fruit.prototype = Object.create(Drawable.prototype);
Fruit.prototype.constructor = Fruit;

Fruit.prototype.collide = function (element) {
    return !(this.x + this.width < element.x ||
        element.x + element.width < this.x ||
        this.y + this.height < element.y ||
        element.y + element.height < this.y);
}