export default class Map {
    width = null;
    height = null;
    context = null;
    tileSet = null;
    scale = null;

    constructor(width, height, context, tileSetUri, scale) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.scale = scale;

        const img = document.createElement("img");
        img.setAttribute("src", tileSetUri);
        this.tileSet = img;
    }

    setViewportForMovement(x, y) {
        //
    }

    draw() {
        const scale = this.scale;
        const tileSize = 16;

        for (let y = 0; y < (tileSize * this.height); y += tileSize) {
            for (let x = 0; x < (tileSize * this.width); x += tileSize) {
                this.context.drawImage(
                    this.tileSet, x, y, tileSize, tileSize, x * scale, y * scale, tileSize * scale, tileSize * scale);
                this.context.strokeRect(0, 0, x * scale, y * scale);
            }
        }
    }
}