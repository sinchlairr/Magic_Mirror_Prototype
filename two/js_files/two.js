var capture;
var started=false;

function setup() {
  createCanvas(600,800);
  
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.position(8,8);
  capture.hide();
  noLoop();
}

function draw() {  

  if (started){
  push();
  translate(0,0);
  // scale(-1, 1);
  image(capture, 0, 0, 300, 400);
  pop();
  push();
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, 300, 400);
  pop();}

}

function startm(){
  started=true;
  loop();
  document.getElementById("hidebtn").style.display="none";
  document.getElementById("hat").style.opacity=0;
  document.getElementById("flap").style.display="none";
  document.getElementById("rhyme").style.display="none";
  document.getElementById("peekaboo").style.display="none";
  document.getElementById("peek").style.display="none";
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
  document.getElementById("hat").style.animation = "move 1s ease-in";
  // document.getElementById("peekaboo").classList.toggle("active");
}