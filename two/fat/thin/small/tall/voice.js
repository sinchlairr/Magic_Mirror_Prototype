var a;

if (annyang) {
    // Let's define a command.
    const commands = {
      'peekaboo': () => { 
        if (a==1){
          document.getElementById("flap").style.display="none";
          document.getElementById("peekaboo").style.display="none";
          document.getElementById("hat").style.display="none";
            return a=0;
        }
    
        else {
          document.getElementById("flap").style.display="none";
          document.getElementById("peekaboo").style.display="none";
          document.getElementById("hat").style.display="none";
            return a=1;
        }
       }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }