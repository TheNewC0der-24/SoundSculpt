var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon")


icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./Media/pause.png"
  } else {
    mySong.pause();
    icon.src = "./Media/play.png"
  }

}



var mybutton = document.getElementById("myBtn");

// When the user scrolls down 75px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}
