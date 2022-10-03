//play button thing 
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon")


icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./Media/Image/pause.png"
  } else {
    mySong.pause();
    icon.src = "./Media/Image/play.png"
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

//trying to do the random thing but then realises that i can random 5 array together coz that will coz alot od confusing right but here it is the function that could do the random thing if i know how to use it better 
/*var photoss = document.getElementsById('photos');
window.onload = function () {
            var images = ['https://cdn.discordapp.com/attachments/938107328434151475/1024184597145206855/Picsart_22-09-27_10-33-32-760.png', 'https://cdn.discordapp.com/attachments/938107328434151475/1024181542949502987/Picsart_22-09-27_10-20-00-284.png', 'https://cdn.discordapp.com/attachments/938107328434151475/1023892054612398080/570764_Girl_style_watercolor_illustration.jpg'];
            var image = images[Math.floor(Math.random() * images.length)];
            photoss.src = " "+image+"";
}*/
// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
} 







