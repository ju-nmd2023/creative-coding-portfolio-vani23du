function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  x = random(width);
  y = random(height);
}

function randomLines() {
  for (let i = 0; i < 20; i++);
}

function draw() {
  background(255, 255, 255);
  stroke(0, 0, 0);
  randomLines();
}

noLoop();
