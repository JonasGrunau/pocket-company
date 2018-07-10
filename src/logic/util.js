export const createTileMap = options => {
    const tilesY = options.resolution.y / options.tileSize;
    const tilesX = options.resolution.x / options.tileSize;

    let x1 = getRandomNumber();
    let x2 = 0;
    let x3 = 0;

    let map = [];
    for (let y = 0; y < tilesY; y++) {
        let row = [];
        x2 = getRandomNumber();
        for (let x = 0; x < tilesX; x++) {
            x3 = getRandomNumber();
            row.push({
                x: x,
                y: y,
                tileSize: options.tileSize,
                color: `rgb(${x2},${x1},${x3})`
            });
        }
        map.push(row)
    }

    // TODO remove
    console.log(x1, x2, x3);

    return map;
};

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 254);
};