//THE FOLLOWING CODE WAS WRITTEN WITH THE HELP OF Patt Vira's VIDEO: https://youtu.be/uctX1P3H3xM
//FOLLOWING CODE WAS WRITTEN WITH SOME HELP FROM chatGPT: https://chatgpt.com/share/68c11878-fcec-8003-92ea-75567d1bb469

let adjustNoise = (innerWidth + innerHeight) / 2;

//VARIABLES FOR THE X:ES FOR THE BEZIER CURVE
let x1;
let x2;
let x3;
let x4;

//VARIABLES FOR THE Y:S FOR THE BEZIER CURVE
let y1;
let y2;
let y3;
let y4;

/* -------------------------------------- */

//SETUP FUNCTION
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(20);
}

//!THE! DRAW FUNCTION
function draw() {
  //general
  background(0, 1);
  strokeWeight(1);
  stroke(255);
  noFill();

  //draw
  x1 = noise(adjustNoise + 0) * innerWidth;
  y1 = noise(adjustNoise + 0) * innerHeight;

  x2 = noise(adjustNoise + random(500, 1000)) * innerWidth;
  y2 = noise(adjustNoise + 0) * innerHeight;

  x3 = noise(adjustNoise + random(500, 1000)) * innerWidth;
  y3 = noise(adjustNoise + 0) * innerHeight;

  x4 = noise(adjustNoise + random(500, 1000)) * innerWidth;
  y4 = noise(adjustNoise + 0) * innerHeight;

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  adjustNoise += 0.01;
}
