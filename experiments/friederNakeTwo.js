//THE FOLLOWING CODE WAS WRITTEN WITH THE HELP OF Patt Vira's VIDEO: https://youtu.be/uctX1P3H3xM
//FOLLOWING CODE WAS WRITTEN WITH SOME HELP FROM chatGPT: https://chatgpt.com/share/58c11878-fcec-8003-92ea-75557d1bb459
//FOLLOWING CODE (THE SOUND) CONTAINS PARTS WRITTEN WITH THE HELP OF: https://tonejs.github.io/
//FOLLOWING CODE (THE SOUND) CONTAINS PARTS WRITTEN WITH THE HELP OF chatGPT: https://chatgpt.com/share/68dd9a1f-0710-8003-8d67-a41da2b4ee9c

//SOUND VARIABLES
const synth = new Tone.Synth().toDestination();
const twinkleNotes = [
  "C5",
  "C5",
  "G5",
  "G5",
  "A5",
  "A5",
  "G5",
  "F5",
  "F5",
  "E5",
  "E5",
  "D5",
  "D5",
  "C5",
];
let arrayLoop = 0;

//VARIABLES FOR THE X:ES FOR THE BEZIER CURVE
let x1;
let x2;

//VARIABLES FOR THE Y:S FOR THE BEZIER CURVE
let y1;
let y2;

//OTHER VARIABLES
let explodingStarSize;
let adjustNoise = 0;

/* -------------------------------------- */

//SETUP FUNCTION
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(15);
}

function drawSmallPlanet() {
  push();
  fill(255, 255, 255);
  ellipse(mouseX, mouseY, random(2, 15));
  pop();
}

function explodingStar() {
  push();
  fill(255, 255, 255);
  explodingStarSize = noise(adjustNoise + 5) * 500;
  ellipse(innerWidth / 2, innerHeight / 2, explodingStarSize);
  pop();
}

//!THE! DRAW FUNCTION
function draw() {
  //drawing the night sky
  background(0, 0, 0, 1);
  push();
  strokeWeight(2);
  stroke(255, 4);
  noFill();

  x1 = noise(adjustNoise + 1) * innerWidth;
  y1 = noise(adjustNoise + 2) * innerHeight;

  x2 = noise(adjustNoise + 3) * 3000;
  y2 = noise(adjustNoise + 3) * 2000;

  ellipse(x1, y1, x2, y2);
  adjustNoise += 0.01;
  pop();

  //draw planet earth & light
  explodingStar();
}

/* -------------------------------------- */

//SOUND AND MOUSEPRESSED (FOR SMALL PLANETS AND SOUND)

async function mousePressed() {
  await Tone.start();
  drawSmallPlanet();
  let currentNote = twinkleNotes[arrayLoop];
  synth.triggerAttackRelease(currentNote, 0.2);
  arrayLoop++;

  if (arrayLoop >= twinkleNotes.length) {
    arrayLoop = 0;
  }
}
