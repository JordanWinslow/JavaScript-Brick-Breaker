import Brick from "/src/brick.js"

export function buildLevel(game, level) {

    let bricks = []

    level.forEach((row, rowIndex) => {

        row.forEach((brick, brickIndex) => {
            if (brick === 1) {

                let position = {
                    x: brickIndex * 50 + 25,
                    y: rowIndex * 25 + 50
                }
                bricks.push(new Brick(game, position))
            }
        })
    })
    return bricks // this returns the array of brick objects which will then populate the screen once drawn in game.js
}

export const level1 = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
]
// if 1, brick appears. if 0, empty space.