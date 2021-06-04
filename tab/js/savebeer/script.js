var fill = document.getElementById("pintdrink");
var btn = document.getElementById("btnpress");
var pintsleft = document.getElementById("pintsleft");
var storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
var storageTotalPints = parseInt(localStorage.getItem('totalpintsnum'));
var storageFirstVisit = localStorage.getItem('first');
var firstvisit = true;
var foam1 = document.getElementById("foam1");
var foam2 = document.getElementById("foam2");
var addit = document.getElementById("addit");
var removeit = document.getElementById("removeit");
var removeitconfirm = document.getElementById("removeitconfirm");

setTimeout(function() {
    foam1.style.opacity = "0";
    foam2.style.opacity = "0";
}, 10);

setInterval(function() {
    if (isNaN(currentpints)){
        currentpints = 0;
        location.reload();
    }
    if (isNaN(totalpintsnum)){
        totalpintsnum = 0;
        location.reload();
    }
    if (isNaN(storageCurrentPints)){
        parseInt(localStorage.setItem('currentpints', 0));
        location.reload();
    }
    if (isNaN(storageTotalPints)){
        parseInt(localStorage.setItem('totalpintsnum', 0));
        location.reload();
    }
}, 50);

setInterval(function() {
    storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
    currentpints = storageCurrentPints;

    storageTotalPints = parseInt(localStorage.getItem('totalpintsnum'));
    totalpintsnum = storageTotalPints;
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints')); //Gets storage for pints
}, 100);

var ready = true;
//to set the timeouts

var totalpints = 124;
// 6,448,000,000 ( 6448000000 )

var currentpints = storageCurrentPints;
//will be linked to database

//setTimeout(function() {
    //if (localStorage.getItem('first') !== false){
            //localStorage.setItem('first', false);
            //location.reload();
    //}
//}, 50);

var fillsofar = storageCurrentPints / totalpints * 100;

addit.addEventListener("click", function() {
    //if (ready === true) {
      //  ready = true;
        //fillsofar = storageCurrentPints / totalpints * 100;
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
        //currentpints = storageCurrentPints; //CurrentPints = StoragePints
        localStorage.setItem('currentpints', currentpints + 1); //Storage pints = current pints + 1
        currentpints = currentpints + 1;
        localStorage.setItem('totalpintsnum', totalpintsnum + 1); //Storage pints = current pints + 1
        totalpintsnum = totalpintsnum + 1;
        //localStorage.setItem('currentpints', parseInt(storageCurrentPints + 1));
        //storageCurrentPints = parseInt(localStorage.getItem('currentpints'));
        fillsofar = parseInt(localStorage.getItem('currentpints')) /  totalpints * 100;
        fill.style.height = fillsofar + "%";
        pintsleft.innerHTML = parseInt(localStorage.getItem('currentpints'));
        //setTimeout(function() {
            //15 min timeout to turn the button back on
          //  ready = true;
        //}, 900000);
        //add 1 to pints and set to false
    //}
    //else if (ready === false) {
      //  alert("You can only have one pint every 15 mins.")
        //announce they have hit limit for the day/week/hour
   // }
});

removeitconfirm.addEventListener("click", function() {
        localStorage.setItem('currentpints', currentpints - 1); //Storage pints = current pints + 1
        currentpints = currentpints - 1;
        localStorage.setItem('totalpints', totalpintsnum - 1); //Storage pints = current pints + 1
        totalpintsnum = totalpintsnum - 1;
        fillsofar = parseInt(localStorage.getItem('currentpints')) /  totalpints * 100;
        fill.style.height = fillsofar + "%";
        pintsleft.innerHTML = parseInt(localStorage.getItem('currentpints'));
});

setInterval(function(){
    fill.style.height = fillsofar + "%";
    pintsleft.innerHTML = parseInt(localStorage.getItem('currentpints'));
    if (storageCurrentPints >= 120) {
        foam1.style.opacity = "1";
        foam2.style.opacity = "1";
    }
    if (storageCurrentPints <= 119) {
        foam1.style.opacity = "0";
        foam2.style.opacity = "0";
    }

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


// ADD PLUS AND MINUS BUTTON