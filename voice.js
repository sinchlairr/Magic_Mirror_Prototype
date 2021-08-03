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
            document.getElementById("flap").style.display="none";
            // document.getElementById("peek").style.display="none";
            document.getElementById("hat").style.animation = "shake 0.8s ease-in";
            return a=1;
        }
       }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }