addtimer = document.getElementById("addtimer");
removetimer = document.getElementById("removetimer");

removeit.addEventListener("click", function(){
    removeit.style.display = "none";
    removetimer.style.display = "block";
})

addit.addEventListener("click", function(){
    addit.style.display = "none";
    addtimer.style.display = "block";
})