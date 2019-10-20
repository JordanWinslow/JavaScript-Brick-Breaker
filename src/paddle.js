class Paddle {

  constructor(game) {
    
    this.width = 150
    this.height = 30
    this.destroyed = false
    this.position = {

      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    }

    this.maxSpeedX = 5;
    this.maxSpeedY = 5;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw(draw) {

    draw.fillStyle = "#28251E"
    draw.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    
    this.position.x += this.speedX
    this.position.y += this.speedY

    // SET PADDLE BOUNDARIES
    if (this.position.x <= 0) this.position.x = 0 
    if (this.position.x + this.width >= 800) this.position.x = 800 - this.width // account for width of paddle
    if (this.position.y <= 500) this.position.y = 500 
    if (this.position.y + this.height >= 600) this.position.y = 600 - this.height // account for height of paddle
  }

  moveLeft() {
    this.speedX = -this.maxSpeedX
  }

  moveRight() {
    this.speedX = this.maxSpeedX
  }

  moveUp() {
    this.speedY = -this.maxSpeedY
  }

  moveDown() {
    this.speedY = this.maxSpeedY
  }

  stopX() {
    this.speedX = 0
  }

  stopY() {
    this.speedY = 0
  }
}

export default Paddle
