export default class Engine {
    canvasContext = null;
    engineResolve = null;
    engineReject = null;
    timerId = null;

    count = 0;

    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    initialize(tileset, scale) {
        drawMap(this.canvasContext, tileset, scale);
    }

    start() {
        return new Promise((resolve, reject) => {
            this.engineResolve = resolve;
            this.engineReject = reject;
            const boundLoop = this.loop.bind(this);
            this.timerId = setInterval(boundLoop, 20, this);
        });
    }

    loop() {
        this.count++;
    }

    // noinspection JSUnusedGlobalSymbols
    stop(withError) {
        clearInterval(this.timerId);

        if (withError) {
            this.engineReject();
        }
        this.engineResolve();
    }
}

function drawMap(context, tileset, scale) {
    const width = 384; // 384
    const height = 320; // 320

    for (let y = 0; y < (16 * height); y = y + 16) {
        for (let x = 0; x < (16 * width); x = x + 16) {
            context.drawImage(tileset, x, y, 16, 16, x * scale, y * scale, 16 * scale, 16 * scale);
        }
    }
}