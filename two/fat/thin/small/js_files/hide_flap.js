var a;

function hide_flap(){
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

// document.getElementById("shake").addEventListener('click' , function(e){
//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;

//     let ripples = document.createElement('span');
//     ripples.style.left = x+'px';
//     ripples.style.top = y+'px';
//     this.appendChild(ripples);
// })

// var el = document.getElementById('hat');
// if(el){
//   el.addEventListener('click' , function(e){
//     document.getElementById("hat").style.display="none";
// })
// }

