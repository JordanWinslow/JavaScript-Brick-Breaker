<a href="https://codesandbox.io/embed/github/JordanWinslow/JavaScript-Brick-Breaker/tree/master/?fontsize=14&view=preview">
  <div align="center">
  
  ![](https://media.giphy.com/media/ic7vPaXeqQZ9zlDRrW/giphy.gif)
  
  </div>
  <h1>Yet Another JavaScript Brick Breaking Game</h1>
</a>

<p>
The purpose of this "game" is purely educational and is aimed at demonstrating my
knowledge of vanilla javascript. 

The game utilizes an array of 0's and 1's to generate a series of bricks with HTML Canvas.

Each brick is a classical JavaScript object that is assigned a boolean "destroyed" state and uses an implementation of axis-aligned
bounding box collision detection I created to determine if the orb is touching the brick on any side during every redraw
of the canvas. 

The same collision detection is extended on the paddle to determine if the ball hits the paddle. The bricks
strobe in color is not a glitch, I was just playing around with randomly generating colors on every redraw.

The paddle is controlled with event handlers and CSS that converts keystrokes to directions
for the x and y axis. 

One thing I would change if I rewrote this program today would be to write it with pure functions and
no classes.
</p>
<p>
  The code within demonstrates knowledge of the following foundations of JavaScript:
<strong>
<ul>
  <li>Higher-Order Functions
  <li>Event Handlers (4 direction input)
  <li>Selectors
  <li>Passing objects and functions as arguments
  <li>Object and Array destructuring
  <li>Constructors & ".this"
  <li>Loops
</ul>
</strong>
