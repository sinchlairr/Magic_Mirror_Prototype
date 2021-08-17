let img;
let vid;
let theta = 0;
let cam;

function setup() {
  // var cnv = createCanvas(0.42*screen.width, 0.5*screen.height, WEBGL);
  var cnv = createCanvas(0.4*windowWidth, 0.9*windowHeight, WEBGL);
  cnv.parent('p5Div');

  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(200, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
}

function draw() {
  background(250);
  noStroke();
  translate(2, 0, 50);
  push();
  rotateY(25);
  // rotateX(2.7);
//   rotateZ(1.7);

  //pass image as texture
  texture(vid);
  // cone(280, 800,500);
  cylinder(330,750);
//   console.log(3*screen.height/4);
  

}