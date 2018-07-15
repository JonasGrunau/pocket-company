import Sprite from "./sprite";

export default class Player {
    x = null;
    y = null;
    width = null;
    height = null;
    scale = null;
    context = null;
    sprite = null;

    constructor(x, y, width, height, context, spriteSheet, scale) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.context = context;
        this.scale = scale;

        const spriteOptions = {
            startTop: 20,
            width: width,
            height: height,
            select: [{
                row: 0,
                columns: 4,
                directory: "dlur"
            }, {
                row: 1,
                columns: 4,
                directory: "dlur"
            }],
            gap: 14
        };
        this.sprite = new Sprite(width, height, spriteSheet, scale, spriteOptions);
    }

    move(x, y) {
        this.x += x;
        this.y += y;
        this.sprite.setSpriteForMovement(x, y);
    }

    draw() {
        const currentSprite = this.sprite.getSprite();
        //this.context.drawImage(currentSprite, 0, 0);
        this.context.drawImage(this.sprite.sprites[0], 0, 0);
        this.context.drawImage(this.sprite.sprites[1], 32, 0);
        this.context.drawImage(this.sprite.sprites[2], 64, 0);
        this.context.drawImage(this.sprite.sprites[3], 96, 0);

        this.context.drawImage(this.sprite.sprites[4], 0, 64);
        this.context.drawImage(this.sprite.sprites[5], 32, 64);
        this.context.drawImage(this.sprite.sprites[6], 64, 64);
        this.context.drawImage(this.sprite.sprites[7], 96, 64);
    }
}