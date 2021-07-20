var desktop = document.getElementById('desktop');
var mobile = document.getElementById('mobile');

function responsiveDesign(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }

var x = window.matchMedia("(max-width: 700px)")
responsiveDesign(x) // Call listener function at run time
x.addListener(responsiveDesign) // Attach listener function on state changes

setInterval(function() {
    if ((window.screen.width > 828) && (window.screen.height > 1792)) {
        desktop.classList.add("shown");
        mobile.classList.add("hidden");
        desktop.classList.remove("hidden");
        mobile.classList.remove("shown");
    }
    else {
        desktop.classList.add("hidden");
        mobile.classList.add("shown");
        desktop.classList.remove("shown");
        mobile.classList.remove("hidden");
    }
}, 50);