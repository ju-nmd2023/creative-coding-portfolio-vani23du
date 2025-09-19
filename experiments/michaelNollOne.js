//FOLLOWING CODE WAS CREATED WITH THE HELP OF GARRIT'S TUTORIAL ON GRIDS: https://codepen.io/pixelkind/pen/OJrMeaj
//FOLLOWING CODE WAS CREATED WITH THE HELP OF chatGPT: https://chatgpt.com/share/68caac23-a52c-8003-b5a5-a09363754a31
//VARIABLES
const pixelSize = 500;
const pixelAmount = 1;

/* -------------------------------------- */

//SETUP
function setup() {
  createCanvas(500, 500);
  noLoop();
  clear();
}

//FUNCTIONS

//pixel and/or QR-code Art
function drawPixelElement() {
  push();
  const pixelFields = 50;
  const fieldSize = pixelSize / pixelFields;
  for (let x = 0; x < pixelFields; x++) {
    for (let y = 0; y < pixelFields; y++) {
      push();
      stroke(5);
      if (Math.random() < 0.4) {
        fill(255, 255, 255);
      }
      square(x * fieldSize, y * fieldSize, fieldSize);
      pop();
    }
  }
  pop();
}

//The qr code square
function qrSquare() {
  //Outer
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(15);
  square(185, 185, 130);
  //Inner
  push();
  fill(0, 0, 0);
  square(225, 225, 50);
  pop();
}

//If mouse is clicked - A new QR-code
function mousePressed() {
  draw();
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
        positionX += pixelSize / 2;
      }
      push();
      translate(positionX, positionY);
      drawPixelElement(0);
      pop();
    }
  }
  qrSquare();
}
