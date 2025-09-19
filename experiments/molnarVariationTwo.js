//The following code was written with the help of Garrit´s video example: https://play.ju.se/media/Noise+examples,+and+Vera+Moln%C3%A1r/0_3pcpvm3q -

//VARIABLES
//r = rectangle & is = inside strokes
const rSize = 200;
const isAmount = 400; 

/* -------------------------------------- */

//SETUP
function setup() {
  createCanvas(innerWidth, 400);
  frameRate(4);
}

//FUNTIONS
//random values function
function randomValues(position, randomness) {
  return position + map(Math.random(), 0, 1, -randomness, randomness);
}

//draw the variants of the objects
function rectangles(x, y, rSize, isAmount) {
  const randomness = rSize / 3;
  noFill();
  for (let i = 0; i < isAmount; i++) {
    const size = (rSize / isAmount) * i;
    const midPoint = size / 3;

    //drawing a sketchy single object
    beginShape();
    vertex(
      randomValues(x - midPoint, randomness),
      randomValues(y - midPoint, randomness)
    );
    vertex(
      randomValues(x + midPoint, randomness),
      randomValues(y - midPoint, randomness)
    );
    vertex(
      randomValues(x + midPoint, randomness),
      randomValues(y + midPoint, randomness)
    );
    vertex(
      randomValues(x - midPoint, randomness),
      randomValues(y + midPoint, randomness)
    );
    endShape(CLOSE);
  }
}

//!THE! DRAW FUNCTION
function draw() {
  //general
  background(0, 0, 0);
  stroke(255, 255, 255);
  //draw
  for (let x = 0; x < 10; x++) {
    //changed
    for (let y = 0; y < 10; y++) {
      //changed
      rectangles(rSize / 2 + x * rSize, rSize / 2 + y * rSize, rSize, isAmount);
    }
  }
}
