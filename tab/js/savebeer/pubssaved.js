var pubssaved = parseInt(localStorage.getItem('savedpubs'));
var currentpubssaved = pubssaved;

setInterval(function(){
    if (currentpints >= 124) {
        currentpints = 0;
        parseInt(localStorage.setItem('savedpubs', currentpubssaved + 1));
        currentpubssaved = pubssaved
    }
},50);