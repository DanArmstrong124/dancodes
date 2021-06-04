setInterval(function(){
    if (currentpints === 0) {
        removeit.style.display = "none";
    }
    if (currentpints >= 1) {
        removeit.style.display = "block"
    }
},1000);


