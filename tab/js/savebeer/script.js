var fill = document.getElementById("pintdrink");
var btn = document.getElementById("btnpress");

var ready = true;
//to set the timeouts

var totalpints = 3;
// 6,448,000,000 ( 6448000000 )

var currentpints = 0;
//will be linked to database

var fillsofar = totalpints / currentpints;

btn.addEventListener("click", function() {
    if (ready === true) {
        currentpints = currentpints + 1;
        ready = false;
        fillsofar = totalpints / currentpints;
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
}, 100);

//Every 0.1s the pint will refresh to keep filling every persons clicks