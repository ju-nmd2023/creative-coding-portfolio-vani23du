//FOLLOWING CODE WAS CREATED WITH THE HELP OF GARRIT'S TUTORIAL ON GRIDS: https://codepen.io/pixelkind/pen/OJrMeaj
//FOLLOWING CODE WAS CREATED WITH THE HELP OF chatGPT: https://chatgpt.com/share/68caac23-a52c-8003-b5a5-a09363754a31

//VARIABLES
const pixelSize = 400;
const pixelAmount = 1;
const plateX = 0;
const plateY = 0;

/* -------------------------------------- */

//SETUP
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(1);
}

//FUNCTIONS
function plate() {
  push();
  fill(255, 255, 255);
  rect(plateX, plateY, 400, 400, 60);
  pop();
}

function sushi() {}

//pixel art
function drawPixelElement() {
  push();
  const pixelFields = 4;
  const fieldSize = pixelSize / pixelFields;
  for (let x = 1; x < pixelFields; x++) {
    for (let y = 1; y < pixelFields; y++) {
      //SUSHI ON PLATE

      //seaweed and rice!!!
      push();
      stroke(46, 100, 87);
      strokeWeight(8);
      fill(255, 250, 230);
      ellipse(x * fieldSize, y * fieldSize, 70);
      pop();
      //sushi filling
      push();
      noStroke();
      fill(250, 108, 114);
      ellipse(x * fieldSize, y * fieldSize, 30);
      pop();

      //sushi has been eaten!!!
      if (Math.random() < 0.6) {
        push();
        fill(255, 255, 255);
        ellipse(x * fieldSize, y * fieldSize, 80);
        pop();
      }
    }
  }
}

//!THE! DRAW FUNCTION
function draw() {
  background(0, 0, 0);
  noFill();
  strokeWeight(2);
  stroke(255, 255, 255);

  const centeringX = (width - pixelSize) / 2;
  const centeringY = (height - pixelSize) / 2;
  for (
    let x = -Math.floor(pixelAmount / 2);
    x < Math.ceil(pixelAmount / 2);
    x++
  ) {
    for (
      let y = -Math.floor(pixelAmount / 2);
      y < Math.ceil(pixelAmount / 2);
      y++
    ) {
      let positionX = centeringX + x;
      let positionY = centeringY + y;
      if (pixelAmount % 2 === 0) {
        positionX += pixelSize * 2;
      }
      translate(positionX, positionY);
      plate();
      drawPixelElement(0);
    }
  }
}
