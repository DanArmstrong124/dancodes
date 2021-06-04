addtimer = document.getElementById("addtimer");
removetimer = document.getElementById("removetimer");

var rtimecount = 30;
var atimecount = 30;

removeitconfirm.addEventListener("click", function(){
    rtimecount = 30;
    removeit.style.display = "none";
    removetimer.style.display = "block";

    setInterval(function(){
        removetimer.innerHTML = rtimecount;
        rtimecount = rtimecount - 1;
        if (rtimecount <= 0) {
                removeit.style.display = "block";
                removetimer.style.display = "none";
        }
    }, 1000);
    
});

addit.addEventListener("click", function(){
    atimecount = 30;
    addit.style.display = "none";
    addtimer.style.display = "block";

        setInterval(function(){
        addtimer.innerHTML = atimecount;
        atimecount = atimecount - 1;
        if (atimecount <= 0) {
                addit.style.display = "block";
                addtimer.style.display = "none";
        }
    }, 1000);
})