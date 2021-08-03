var capture;

function setup() {
  createCanvas(600,400);
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.position(8,8);
  capture.hide();
}

function draw() {  
  push();
  translate(0,0);
  // scale(-1, 1);
  image(capture, 0, 0, 300, 400);
  pop();
  push();
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, 300, 400);
  pop();
}