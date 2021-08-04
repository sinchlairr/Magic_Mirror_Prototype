let img;
let vid;
let theta = 0;
let cam;

function setup() {
  createCanvas(600, 500, WEBGL);

  // img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(710, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
}

function draw() {
  background(250);
  noStroke();
  translate(-75, 0, 10);
  push();
  rotateY(16);
  rotateX(2);
  rotateZ(0.5);

  //pass image as texture
  texture(vid);
  cone(280, 800,500);
  

  // theta += 0.05;
}