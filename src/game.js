import Paddle from "/src/paddle.js"
import Ball from "/src/ball.js"
import InputHandler from "/src/input.js"
import { buildLevel, level1 } from "/src/level.js"

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }

    start() {
        this.paddle = new Paddle(this) // Create the paddle
        this.ball = new Ball(this) // Create the orb
        let bricks = buildLevel(this, level1) // Create the bricks

        // to avoid having to type repeat code we create an array with all the game objects in it, then iterate over the array when we need to perform tasks.
        
        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]

        new InputHandler(this.paddle) // send the inputHandler the paddle object so it can control it
    }
    
    update() {
        //update each game object's information including position, check for collisions, etc.
        this.gameObjects.forEach(gameObject => gameObject.update())

        // if any bricks are destroyed, we remove them from the game object array.
        this.gameObjects = this.gameObjects.filter(gameObject => gameObject.destroyed === false)
    }
    
    draw(context) {
        this.gameObjects.forEach(gameObject => {
            return gameObject.draw(context)
        })
    }
}

export default Game