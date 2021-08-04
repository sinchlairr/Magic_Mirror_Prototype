// let img;
// let vid;
// let theta = 0;
// let cam;

// function setup() {
//   var cnv = createCanvas(0.42*screen.width, 0.5*screen.height, WEBGL);
//   cnv.parent('p5Div');

//   // vid = createVideo(['assets/360video_256crop_v2.mp4']);
//   vid = createCapture(VIDEO);
//   vid.size(200, 400);
//   // vid.elt.muted = true;
//   // vid.loop();
//   vid.hide();
// }

// function draw() {
//   background(250);
//   noStroke();
//   translate(2, 0, 50);
//   push();
//   rotateY(25);
//   // rotateX(2.7);
// //   rotateZ(1.7);

//   //pass image as texture
//   texture(vid);
//   // cone(280, 800,500);
//   cylinder(330,750);
// //   console.log(3*screen.height/4);
  

// }

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