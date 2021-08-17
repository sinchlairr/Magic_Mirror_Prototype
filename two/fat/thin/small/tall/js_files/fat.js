let img;
let vid;
let theta = 0;
let cam;
var started = false;

function setup() {
  var cnv = createCanvas(0.35*windowWidth, 0.9*windowHeight, WEBGL);

  img = loadImage('assets/cat.jpg');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid = createCapture(VIDEO);
  vid.size(730, 400);
  // vid.elt.muted = true;
  // vid.loop();
  vid.hide();
  noLoop();
}

function draw() {
  if (started){
  background(250);
  noStroke();
  translate(0, 0, 20);
  push();
  rotateY(16);
  rotateX(-0.8);
  rotateZ(-0.25);

  //pass image as texture
  texture(vid);
  cone(560, 1350,900);}
  
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
  
  
    setTimeout(startm, 10000);
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
            // setTimeout(shake, 1000);
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

