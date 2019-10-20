/*
Author: Jordan Winslow
Description:
The purpose of this "game" is purely educational and is aimed at demonstrating my knowledge of vanilla javascript. 

The game utilizes an array of 0's and 1's to generate a series of bricks with HTML Canvas.

Each brick is a classical JavaScript object that is assigned a boolean "destroyed" state and uses an implementation of axis-aligned bounding box collision detection I created to determine if the orb is touching the brick on any side during every redraw of the canvas.

The same collision detection is extended on the paddle to determine if the ball hits the paddle.

The bricks strobe in color is not a glitch, I was just playing around with randomly generating colors on every redraw. Yes it's ugly, but hey, this isn't a design project!

The paddle is controlled with event handlers and CSS that converts keystrokes to directions for the x and y axis.

One thing I would change if I rewrote this program today would be to write it with pure functions and no classes.
*/

import "./styles.css"
import Game from "/src/game.js"
const GAME_WIDTH = 800
const GAME_HEIGHT = 600

let game = new Game(GAME_WIDTH, GAME_HEIGHT)
// RENDER TO SCREEN
if (window.innerWidth < 800) {
  document.getElementById("app").innerHTML = `
  <p align="center" id="danger">Sorry, your screen must be at least 800px wide to play this game!<br /><br />
  Please resize the window and refresh!</p>`
} else {
  document.getElementById("app").innerHTML = `
  <canvas id="gameScreen" width=${GAME_WIDTH} height=${GAME_HEIGHT}/>
`
  let canvas = document.getElementById("gameScreen")
  let context = canvas.getContext("2d")
  let lastTimeDrawn = 0

  // initialize game
  game.start(GAME_WIDTH, GAME_HEIGHT)

  function gameLoop(currentTime) {
    let deltaTime = currentTime - lastTimeDrawn // how much time has passed?
    lastTimeDrawn = currentTime // update currentTime so next time we redraw it is updated
    // first clear the entire canvas and re-draw on every frame
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    // re-initiate the location of the paddle

    game.update(deltaTime)
    game.draw(context)

    // when the browser is ready for a new frame, run the gameloop function. This way the browser sets the speed of the frame updates.
    requestAnimationFrame(gameLoop)
  }

  requestAnimationFrame(gameLoop)
}
