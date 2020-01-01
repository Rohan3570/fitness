
var myVideo = document.getElementById("mute-video"); 

        
//function changing muted value using single buttton.

function sound(){
        if (myVideo.muted === false) {
          myVideo.muted = true;
          // document.test.submit();
        } else {
          myVideo.muted = false;
        }
  }