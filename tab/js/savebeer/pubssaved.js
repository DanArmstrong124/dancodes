var pubssaved = parseInt(localStorage.getItem('savedpubs'));
var currentpubssaved = pubssaved;

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
        alert("Congratultions, you have now saved " + currentpubssaved + " pubs! - Please check the achievements for more!")
    }
},50);