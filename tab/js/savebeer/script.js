var fill = document.getElementById("pintdrink");
var btn = document.getElementById("btnpress");
var pintsleft = document.getElementById("pintsleft");
var storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
var storageFirstVisit = localStorage.getItem('first');
var firstvisit = true;

setInterval(function() {
    currentpints = storageCurrentPints;
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints')); //Gets storage for pints
}, 100);

var ready = true;
//to set the timeouts

var totalpints = 124;
// 6,448,000,000 ( 6448000000 )

var currentpints = storageCurrentPints;
//will be linked to database

setTimeout(function() {
    if (storageFirstVisit !== false){
        if (firstvisit === true) {
            //currentpints = 0;
            parseInt(localStorage.setItem('currentpints', 0));
            localStorage.setItem('first', false);
        }
    }
    else if (storageFirstVisit === false) {
        storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
        currentpints = storageCurrentPints;
    }
}, 500);

var fillsofar = storageCurrentPints / totalpints * 100;

btn.addEventListener("click", function() {
    if (ready === true) {
        ready = false;
        //fillsofar = storageCurrentPints / totalpints * 100;
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
        currentpints = storageCurrentPints; //CurrentPints = StoragePints
        localStorage.setItem('currentpints', currentpints + 1); //Storage pints = current pints + 1
        //localStorage.setItem('currentpints', parseInt(storageCurrentPints + 1));
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
        fillsofar = parseInt(localStorage.getItem('currentpints')) /  totalpints * 100;
        fill.style.height = fillsofar + "%";
        pintsleft.innerHTML = storageCurrentPints;
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
    pintsleft.innerHTML = storageCurrentPints;

    //if ((currentpints > 9) || (currentpints < 100)){
        //pintsleft.style.fontSize = smaller
        //pints.left.style.left = less
   // }
}, 100);

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