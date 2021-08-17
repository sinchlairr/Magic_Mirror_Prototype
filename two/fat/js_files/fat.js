// let img;
// let vid;
// let theta = 0;
// let cam;

// function setup() {
// let cnv = createCanvas(0.6*screen.width, 0.6*screen.height, WEBGL);
// // cnv.position(0.1* screen.width, 0.2*screen.height);
// cnv.parent('p5Div');


//   img = loadImage('assets/cat.jpg');
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
//   translate(0, 0, 0);
//   push();
//   rotateY(9.5);

//   //pass image as texture
//   texture(vid);
//   sphere(0.13*screen.width);

// }


let img;
let vid;
let theta = 0;
let cam;
var started = false;

function setup() {
  var cnv = createCanvas(0.4*windowWidth, 0.9*windowHeight, WEBGL);
  // var cnv = createCanvas(0.42*window.innerWidth, 0.5*window.innerHeight, WEBGL);
  cnv.parent('p5Div');

  img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  // vid.size(200, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
  noLoop();
}

function draw() {
  if (started){

  background(250);
  noStroke();
  translate(2, 0, -0.1 * windowWidth);
  push();
  rotateY(22);
  // rotateX(2.7);
  // rotateZ(1.7);

  //pass image as texture
  texture(vid);
  // cone(280, 800,500);
  cylinder(350,900);}
//   console.log(3*screen.height/4);
  

}

// window.onresize = function() {
//   // assigns new values for width and height variables
//   // w = window.innerWidth;
//   // h = window.innerHeight;  
//   cnv.size(0.42*screen.width, 0.5*screen.height, WEBGL);
// }


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
  
  
    setTimeout(startm, 12000);
    setTimeout(shake, 1000);
    
  }


  
  function shake(){
    document.getElementById("hat").style.animation = "shake 1s ease-in";
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
        
        
          setTimeout(startm, 10000);
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