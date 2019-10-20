import { collisionDetected } from "/src/collisionDetection.js"

class Brick {

    constructor(game, position) {

        this.game = game
        // this.image = document.getElementById("brickImage") to replace with image
        this.position = position
        this.width = 45
        this.height = 20
        this.destroyed = false
    }

    draw(context) {
        
        // Create Random Orange Toned Color
        let r = Math.floor(Math.random() * 200 + 55)
        context.fillStyle = `rgb(${r}, 0, 66)`
        context.strokeStyle = "#33140D"
        context.shadowBlur = 10
        context.shadowColor = "#779FA1"
        context.shadowOffsetY = 3
        context.shadowOffsetX = 3
        context.strokeRect(this.position.x, this.position.y, this.width, this.height)
        context.fillRect(this.position.x, this.position.y, this.width, this.height)

    }

    update() {

        if (collisionDetected(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.destroyed = true
       }
    }
    
}
export default Brick