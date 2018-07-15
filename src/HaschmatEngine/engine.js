import Player from "./components/player";
import Map from "./components/map";
import * as config from "./config";

export default class Engine {
    width = null;
    height = null;
    scale = null;
    context = null;
    timerId = null;
    map = null;
    player = null;
    drawables = [];

    constructor(width, height, scale, context) {
        this.width = width;
        this.height = height;
        this.scale = scale;
        this.context = context;

        const mapTileSet = config.assets.tileSets[0];
        const playerSpriteSheet = config.assets.sprites.character[0];

        this.map = new Map(width, height, context, mapTileSet, scale);
        this.player = new Player(0, 0, 16, 22, context, playerSpriteSheet, scale);

        this.drawables.push(this.map, this.player);
    }

    start() {
        this.loop(this);
    }

    loop(self) {
        self.clear();

        self.drawables.forEach((element) => {
            element.draw();
        });

        this.timerId = setInterval(this.loop, 30, this);
    }

    clear() {
        this.context.clearRect(0, 0, this.width * this.scale, this.height * this.scale);
    }

    stop() {
        clearInterval(this.timerId);
    }
}