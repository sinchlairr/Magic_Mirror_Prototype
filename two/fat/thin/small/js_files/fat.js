// let img;
// let vid;
// let theta = 0;
// let cam;

// function setup() {
//   var cnv = createCanvas(0.37*windowWidth, 0.77*windowHeight, WEBGL);
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
//   translate(2, 0, -90);
//   push();
//   rotateY(9.5);
//   // rotateX(2.7);
// //   rotateZ(1.7);

//   //pass image as texture
//   texture(vid);
//   // cone(280, 800,500);
//   cylinder(330,900);
// //   console.log(3*screen.height/4);
  

// }


// function windowResized() {
//   resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
//   draw();
// }


let img;
let vid;
let theta = 0;
let cam;

function setup() {
let cnv = createCanvas(0.37*windowWidth, 0.77*windowHeight, WEBGL);
// cnv.position(0.1* screen.width, 0.2*screen.height);
cnv.parent('p5Div');


  // img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(0.6*screen.width, 0.6*screen.height);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
}

function draw() {
  clear();
  noStroke();
  translate(0, 0, 140);
  push();
  rotateY(12.5);

  //pass image as texture
  texture(vid);
  sphere(0.2*screen.width);


}

function windowResized() {
  resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
  draw();
}

