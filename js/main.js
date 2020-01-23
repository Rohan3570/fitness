
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


//function for onscroll counting up.

//  var a = 0;
//  $(window).scroll(function() {

//    var oTop = $('#counter').offset().top - window.innerHeight;
//    if (a == 0 && $(window).scrollTop() > oTop) {
//      $('.counter-value').each(function() {
//        var $this = $(this),
//          countTo = $this.attr('data-count');
//        $({
//          countNum: $this.text()
//        }).animate({
//            countNum: countTo
//          },

//          {

//            duration: 2000,
//            easing: 'swing',
//            step: function() {
//              $this.text(Math.floor(this.countNum));
//            },
//            complete: function() {
//              $this.text(this.countNum);
//              //alert('finished');
//            }

//          });
//      });
//      a = 1;
//    }

//  });