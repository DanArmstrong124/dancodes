var totpinmod = document.getElementById("totpinmod");
var totpubmod = document.getElementById("totpubmod");

setInterval(function() {
    totpinmod.innerHTML = storageTotalPints;
    totpubmod.innerHTML = pubssaved;
},50);