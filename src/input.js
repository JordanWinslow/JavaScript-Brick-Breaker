class InputHandler {
    constructor(paddle) {
        // WHEN THE USER PRESSES A KEY
        document.addEventListener("keydown", event => {

            switch (event.keyCode) {
                case 37: // left arrow
                    paddle.moveLeft()
                    break;
                case 38: // up arrow
                    paddle.moveUp()
                    break;
                case 39: // right arrow
                    paddle.moveRight()
                    break;
                case 40: // down arrow
                    paddle.moveDown()
                    break;
                
            }
        })
    
        // WHEN THE USER RELEASES A KEY
        document.addEventListener("keyup", event => {

            switch (event.keyCode) {
                case 37: // left arrow
                    if (paddle.speedX < 0) paddle.stopX() // only stop moving if the right arrow is not being pressed to avoid lag
                    break;
                case 38: // up arrow
                    if (paddle.speedY < 0) paddle.stopY() // only stop moving if the down arrow is not being pressed to avoid lag
                    break;
                case 39: // right arrow
                    if (paddle.speedX > 0) paddle.stopX() // only stop moving if the left arrow is not being pressed to avoid lag
                    break;
                case 40: // down arrow
                    if (paddle.speedY > 0) paddle.stopY() // only stop moving if the up arrow is not being pressed to avoid lag
                    break;

            }
        })
    }
}

export default InputHandler