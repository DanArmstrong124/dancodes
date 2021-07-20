var desktop = document.getElementById('desktop');
var mobile = document.getElementById('mobile');

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