var pubssaved = parseInt(localStorage.getItem('savedpubs'));
var currentpubssaved = pubssaved;
var pubsavedmodal = new bootstrap.Modal(document.getElementById("pubsavedmodal"), {});
var pubsavedmodalnumber = document.getElementById("pubsavedmodalnumber");

setInterval(function(){
    if (isNaN(pubssaved)){
        parseInt(localStorage.setItem('savedpubs', 0));
        location.reload();
    }
    if (currentpints >= 124) {        
        storageCurrentPints = parseInt(localStorage.setItem('currentpints', 0));
        currentpints = storageCurrentPints;
        parseInt(localStorage.setItem('savedpubs', currentpubssaved + 1));
        currentpubssaved = pubssaved
        alert("You have saved a total of " + (pubssaved + 1) + " pubs!")
        }
},500);