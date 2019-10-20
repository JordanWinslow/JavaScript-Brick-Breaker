import { collisionDetected } from "/src/collisionDetection.js"

class Ball {

    constructor(game) {

        this.game = game
        this.destroyed = false
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.image = document.getElementById("imageOrb") // grab the orb.png image defined in the HTML
        this.size = 25

        this.speed = {
            x: 4,
            y: 4
        }

        this.position = {
            x: 400,
            y: 400
        }
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }
    
    update() {
    
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        // SET BALL WALL BOUNDARIES
        if (this.position.x <= 0 || this.position.x >= this.gameWidth - this.size) this.speed.x = -this.speed.x // Reverse the direction on the x axis if we reach an x boundary.
        if (this.position.y <= 0 || this.position.y + this.size >= this.gameHeight) this.speed.y = -this.speed.y // Reverse the direction on the y axis if we reach a y boundary.
        
        if (collisionDetected(this, this.game.paddle)) {
            this.speed.y = -this.speed.y // reverse y direction on paddle hit
            this.position.y = this.game.paddle.position.y - this.size // ensure ball does not get stuck on paddle
        }
    }
}

export default Ball