export const createTileMap = (paramX, paramY, tileSize) => {
    let map = [];
    for (let y = 0; y < (paramY / tileSize); y++) {
        let row = [];
        for (let x = 0; x < (paramX / tileSize); x++) {
            row.push({
                x: x,
                y: y,
                tileSize: tileSize,
                color: "#000000"
            });
        }
        map.push(row)
    }
    return map;
};