
var myVideo = document.getElementById("mute-video"); 

        
//function changing muted value using single buttton.

function sound(){
        if (myVideo.muted === false) {
          myVideo.muted = true;
          // document.test.submit();
        } else {
          myVideo.muted = false;
        }

        logoVolume = document.getElementById("logo-volume"); 
        logoMute  = document.getElementById("logo-mute");
     
        logoVolume.style.display = (
            logoVolume.style.display == "none" ? "block" : "none"); 
        logoMute.style.display = (
            logoMute.style.display == "none" ? "block" : "none");
  }


//function for toggling between two logos
