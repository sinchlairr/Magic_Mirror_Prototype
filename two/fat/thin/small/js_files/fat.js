

// let img;
// let vid;
// let theta = 0;
// let cam;

// function setup() {
// let cnv = createCanvas(0.37*windowWidth, 0.77*windowHeight, WEBGL);
// // cnv.position(0.1* screen.width, 0.2*screen.height);
// cnv.parent('p5Div');


//   // img = loadImage('assets/cat.jpg');
//   // vid = createVideo(['assets/360video_256crop_v2.mp4']);
//   vid = createCapture(VIDEO);
//   vid.size(0.6*screen.width, 0.6*screen.height);
//   // vid.elt.muted = true;
//   // vid.loop();
//   vid.hide();
// }

// function draw() {
//   clear();
//   noStroke();
//   translate(0, 0, 140);
//   push();
//   rotateY(12.5);

//   //pass image as texture
//   texture(vid);
//   sphere(0.2*screen.width);


// }

// function windowResized() {
//   resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
//   draw();
// }

let img2;
let vid2;
// let theta = 0;
let cam2;
var started = false;

function setup() {
  // cnv2 = createCanvas(700, 500, WEBGL);
  var cnv = createCanvas(0.4*windowWidth, 0.9*windowHeight, WEBGL);
//   textureWrap(MIRROR);
//   cnv2.position(0.25*screen.width,0.3*screen.height);
//   img2 = loadImage('bird_f.png');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid2 = createCapture(VIDEO);
//   vid2.size(1700, 1400);
  // vid.elt.muted = true;
  // vid.loop();
  vid2.hide();
  noLoop();
}

function draw() {
  if (started){

  background(0);

  let dX = mouseX;
  let dY = mouseY;

  let u = lerp(1.0, 2.0, dX);
  let v = lerp(1.0, 2.0, dY);
  console.log(u);
  console.log(v);

  // scale(height);
  scale(width);
  // translate(0,1);

  texture(vid2);

  beginShape();

//ye

  vertex(-1.8,-0.6,0,0,0);

  vertex(1.3,-0.6,0,600,0);

  vertex(1.3,30,0,600,13000);

  vertex(-1.8,30,0,0,13000);

  
  endShape();}

  
  
  
  // theta += 0.05;
}

function startm(){
  started= true;
  loop();
  document.getElementById("hidebtn").style.display="none";
  document.getElementById("hat").style.opacity=0;
  document.getElementById("flap").style.display="none";
  document.getElementById("rhyme").style.display="none";
  document.getElementById("peekaboo").style.display="none";
  document.getElementById("peek").style.display="none";
  // // document.getElementById("hat").style.animation = "shake 0.8s ease-in";
  // document.getElementById("hat").classList.toggle("active");
  }

  function fade(){

    document.getElementById("rhyme").classList.toggle("active");
    document.getElementById("flap-text").style.display='none';
    var audio = document.getElementById("audio");
    audio.play();
  
  
    setTimeout(startm, 9000);
    setTimeout(shake, 1000);
    
  }
  
  function shake(){
    document.getElementById("hat").style.animation = "shake 3s ease-in";
    // document.getElementById("peekaboo").classList.toggle("active");
  }

  var a;

  if (annyang) {
      // Let's define a command.
      const commands = {
        'peekaboo': () => { 
          if (a==1){
              document.getElementById("flap").style.display="inline";
  
              // document.getElementById("peek").style.display="inline";
              document.getElementById("hat").style.animation = "shake2 0.8s ease-in";
              return a=0;
          }
      
          else {
            document.getElementById("rhyme").classList.toggle("active");
            document.getElementById("flap-text").style.display='none';
            var audio = document.getElementById("audio");
            audio.play();
          
          
            setTimeout(startm, 8000);
            setTimeout(shake, 1000);
              // document.getElementById("flap").style.display="none";
              // document.getElementById("peekaboo").style.display="none";
              // // document.getElementById("peek").style.display="none";
              // // document.getElementById("hat").style.animation = "shake 0.8s ease-in";
              // document.getElementById("hat").style.display = "none";
              
              return a=1;
          }
         }
      };
    
      // Add our commands to annyang
      annyang.addCommands(commands);
    
      // Start listening.
      annyang.start();
    }



function windowResized() {
  resizeCanvas(0.37*windowWidth, 0.77*windowHeight);
  draw();
}

console.log(windowWidth);


