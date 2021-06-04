setInterval(function(){
    if (currentpints === 0) {
        removeit.style.display = "none";
    }
    if (currentpints >= 1) {
        if (removetimer.style.display === "none"){
            removeit.style.display = "block";
        }
        if (removetimer.style.display === "block"){
            removeit.style.display = "none";
        }
    }
},10);


