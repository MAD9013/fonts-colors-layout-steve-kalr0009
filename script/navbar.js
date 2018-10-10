window.onscroll = function() {navScroll()};
var navbar = document.getElementsByClassName("mainnav")[0];

var offset = navbar.offsetTop;

function navScroll() {
  if (window.pageYOffset > offset) {
    navbar.classList.add("navScroll");
  } else {
    navbar.classList.remove("navScroll");
  }
} 

/*
CITATION - JS sticky navigation bar code originally found here:
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

I have modified and re-written the code for my purposes.
*/