let img;
let vid;
let theta = 0;
let cam;

function setup() {
  cnv = createCanvas(400, 440, WEBGL);
  // cnv.position(0.25*screen.width,0.3*screen.height);
  img = loadImage('assets/cat.jpg');
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
  translate(89, 0, 105);
  push();
  rotateY(20);

  //70 130
  //pass image as texture
  texture(vid);
  box(472,170,70);
  
  
  
  // theta += 0.05;
}