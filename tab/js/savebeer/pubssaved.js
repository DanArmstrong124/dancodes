var pubssaved = parseInt(localStorage.getItem('savedpubs'));
var currentpubssaved = pubssaved;

setInterval(function(){
    if (isNaN(pubssaved)){
        parseInt(localStorage.setItem('savedpubs', 0));
        location.reload();
    }
    if (currentpints >= 124) {
        currentpints = 0;
        parseInt(localStorage.setItem('savedpubs', currentpubssaved + 1));
        currentpubssaved = pubssaved
    }
},50);