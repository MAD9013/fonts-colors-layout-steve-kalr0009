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