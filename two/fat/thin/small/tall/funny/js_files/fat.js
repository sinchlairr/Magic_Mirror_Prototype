let img;
let vid;
let theta = 0;
let cam;
var started=false;

function setup() {
  createCanvas(600, 500, WEBGL);

  // img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(710, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
  noLoop();
}

function draw() {

  if (started){
  background(250);
  noStroke();
  translate(-75, 0, 10);
  push();
  rotateY(16);
  rotateX(2);
  rotateZ(0.5);

  //pass image as texture
  texture(vid);
  cone(280, 800,500);}
  

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
  
  
    setTimeout(startm, 12000);
    // setTimeout(shake, 1000);
    
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


