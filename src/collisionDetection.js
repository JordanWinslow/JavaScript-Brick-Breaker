export function collisionDetected(orb, gameObject) {
    // SET THE BOUNDARIES OF THE ORB
    let orbBoundary = {

        // TOP LEFT OF orb.png
        top: orb.position.y, // Ay
        left: orb.position.x, // Ax

        // BOTTOM RIGHT OF orb.png
        bottom: orb.position.y + orb.size, // AY
        right: orb.position.x + orb.size // AX orb.size is the width of the orb.png as determined in ball.js
        
    }
    // SET THE BOUNDARIES OF THE OBJECT
    let objectBoundary = {

        // TOP LEFT OF OBJECT (Paddle or Brick in this game)
        top: gameObject.position.y, // By
        left: gameObject.position.x, // Bx

        // BOTTOM RIGHT OF OBJECT (Paddle or Brick in this Game)
        bottom: gameObject.position.y + gameObject.height, // BY
        right: gameObject.position.x + gameObject.width, // BX
    }

    /* Axis-Aligned Bounding Box Collision Detection

    if any of the below are true, 
    our two objects are separate.               ORB                 PADDLE OR BRICK

    -------------------------------|    Ax, Ay______            Bx, By______
    AX < Bx or BX < Ax or          |            |        |                     |       |
    AY < By or BY < Ay              |            |______|AX,AY            |_____|BX, BY
    -------------------------------|            
    */
    
    // Now to implement that logic into our code

    // if none of the below conditions are true then the objects must be colliding, so we return true only when a collision is detected
    return !(orbBoundary.right < objectBoundary.left || objectBoundary.right < orbBoundary.left
        || orbBoundary.bottom < objectBoundary.top || objectBoundary.bottom < orbBoundary.top)
}