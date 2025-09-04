//The following code was written with the help of Garrit´s video example: https://play.ju.se/media/Noise+examples,+and+Vera+Moln%C3%A1r/0_3pcpvm3q -

//VARIABLES
//r = rectangle & is = inside strokes
const rSize = 200; //changed
const isAmount = 400; //changed

//SETUP
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0, 0, 0);
}

//FUNTIONS
//random values function
function randomValues(position, randomness) {
  return position + map(Math.random(), 0, 1, -randomness, randomness);
}

//draw the rectangles/variants of lines
function rectangles(x, y, rSize, isAmount) {
  const randomness = rSize / 3; //changed
  noFill();
  for (let i = 0; i < isAmount; i++) {
    const size = (rSize / isAmount) * i;
    const midPoint = size / 3; //changed

    //drawing a sketchy single rectangle
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
    noLoop();
  }
}
