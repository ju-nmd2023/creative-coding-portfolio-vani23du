//The following code was written with the help of Garrit´s video example: https://play.ju.se/media/Noise+examples,+and+Vera+Moln%C3%A1r/0_3pcpvm3q -

//VARIABLES
//r = rectangle & is = inside strokes
const rSize = 40; //changed
const isAmount = 5; //changed

//SETUP
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(250, 240, 230);
  frameRate(4);
}

//FUNTIONS
//random values function
function randomValues(position, randomness) {
  return position + map(Math.random(), 0, 1, -randomness, randomness);
}

//draw the rectangles/variants of lines
function rectangles(x, y, rSize, isAmount) {
  const randomness = rSize / 20; //changed
  noFill();
  for (let i = 0; i < isAmount; i++) {
    const size = (rSize / isAmount) * i;
    const midPoint = size / 2;

    //drawing a sketchy single rectangle
    beginShape();
    vertex(
      randomValues(x - midPoint, randomness),
      randomValues(y - midPoint, randomness)
    );
    /*vertex(
      randomValues(x + midPoint, randomness),
      randomValues(y - midPoint, randomness)
    ); //deleted
    vertex(
      randomValues(x + midPoint, randomness),
      randomValues(y + midPoint, randomness)
    );//deleted*/
    vertex(
      randomValues(x - midPoint, randomness),
      randomValues(y + midPoint, randomness)
    );
    endShape(CLOSE);
  }
}

function draw() {
  //general
  background(250, 240, 230);
  stroke(104, 81, 48);
  //draw
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 20; y++) {
      rectangles(rSize / 2 + x * rSize, rSize / 2 + y * rSize, rSize, isAmount);
    }
  }
}
