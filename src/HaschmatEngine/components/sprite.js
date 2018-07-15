export default class Sprite {
    currentSprite = null;
    sprites = [];

    constructor(width, height, spriteSheetUri, scale, options) {
        const spriteSheet = document.createElement("img");
        spriteSheet.setAttribute("src", spriteSheetUri);

        const spriteWidth = options.width;
        const spriteHeight = options.height;

        options.select.forEach((element) => {
            const y = element.row * options.height;
            for (let x = 0; x < (spriteWidth * spriteSheet.width); x += spriteWidth) {
                const spriteCanvas = document.createElement("canvas");
                const context = spriteCanvas.getContext("2d");
                x = x !== 0 ? x + options.gap : x;
                context.drawImage(spriteSheet, x, y, spriteWidth, spriteHeight, 0, options.startTop, spriteWidth * scale, spriteHeight * scale);
                this.sprites.push(spriteCanvas);
                if (this.sprites.length === element.columns) {
                    return;
                }
            }
        });

        /*this.sprites = {
            left: [],
            right: [],
            up: [],
            down: []
        };*/
    }

    setSpriteForMovement(x, y) {
        const isPositivX = x - x === 0;
        const isPositivY = y - y === 0;

        if (x !== 0) {
            if (isPositivX) {
                this.currentSprite = this.sprites.right;
            } else {
                this.currentSprite = this.sprites.left;
            }
        } else if (y !== 0) {
            if (isPositivY) {
                this.currentSprite = this.sprites.up;
            } else {
                this.currentSprite = this.sprites.down;
            }
        }
    }

    getSprite() {
        return this.currentSprite;
    }
}