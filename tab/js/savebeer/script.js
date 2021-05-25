var fill = document.getElementById("pintdrink");
var btn = document.getElementById("btnpress");
var pintsleft = document.getElementById("pintsleft");
var storageCurrentPints = parseInt(localStorage.getItem('currentpints'));

var ready = true;
//to set the timeouts

var totalpints = 124;
// 6,448,000,000 ( 6448000000 )

var currentpints = 0;
//will be linked to database

setTimeout(function() {
    if (storageCurrentPints === "NaN") {
        localStorage.setItem('currentpints', 0);
    }
}, 50);

parseInt(storageCurrentPints);
currentpints = storageCurrentPints;

var fillsofar = currentpints / totalpints * 100;

btn.addEventListener("click", function() {
    if (ready === true) {
        currentpints = currentpints + 1;
        ready = false;
        fillsofar = currentpints / totalpints * 100;
        window.localStorage.setItem('currentpints', parseInt(currentpints));
        setTimeout(function() {
            //15 min timeout to turn the button back on
            ready = true;
        }, 900000);
        //add 1 to pints and set to false
    }
    else if (ready === false) {
        alert("You can only have one pint every 15 mins.")
        //announce they have hit limit for the day/week/hour
    }
});

setInterval(function(){
    fill.style.height = fillsofar + "%";
    pintsleft.innerHTML = currentpints;
}, 1000);

//Every 0.1s the pint will refresh to keep filling every persons clicks


//NOTES

//Set a storage for time left until 15
//On btn click, get day and time.
//get 15 mins in the future
//Work out the time between them
//Set 15 min time to storage var
//on re-open bring 15 min time back to screen
//calc current time and date on re-open
//calc time between
//if 0 seconds left: ready = true
//stops refreshing to spam