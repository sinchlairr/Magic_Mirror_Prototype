let img;
let vid;
let theta = 0;
let cam;

function setup() {
  createCanvas(385, 450, WEBGL);

  img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(730, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
}

function draw() {
  background(250);
  noStroke();
  translate(0, 10, 20);
  push();
  rotateY(16);
  rotateX(-1);
  rotateZ(-0.2);

  //pass image as texture
  texture(vid);
  cone(360, 800,500);
  
  // theta += 0.05;
}