var totpinmod = document.getElementById("totpinmod");
var totpubmod = document.getElementById("totpubmod");

var fp = localStorage.getItem('firstpint');
var dp = localStorage.getItem('doubleparked');
var oo = localStorage.getItem('outout');
var wk = localStorage.getItem('weekender');
var tl = localStorage.getItem('thelocal');
var bs = localStorage.getItem('bigspender');
var pa = localStorage.getItem('patriot');
var il = localStorage.getItem('ironliver');
var hr = localStorage.getItem('hero');
var ta = localStorage.getItem('timeatthebar');


setInterval(function(){
    if ((fp !== true) && (fp !== false)){
        localStorage.setItem('firstpint', false);
        location.reload();
    }
    if ((dp !== true) && (dp !== false)){
        localStorage.setItem('doubleparked', false);
        location.reload();
    }
    if ((oo !== true) && (oo !== false)){
        localStorage.setItem('outout', false);
        location.reload();
    }
    if ((wk !== true) && (wk !== false)){
        localStorage.setItem('weekender', false);
        location.reload();
    }
    if ((tl !== true) && (tl !== false)){
        localStorage.setItem('thelocal', false);
        location.reload();
    }
    if ((bs !== true) && (bs !== false)){
        localStorage.setItem('bigspender', false);
        location.reload();
    }
    if ((pa !== true) && (pa !== false)){
        localStorage.setItem('patriot', false);
        location.reload();
    }
    if ((il !== true) && (il !== false)){
        localStorage.setItem('ironliver', false);
        location.reload();
    }
    if ((hr !== true) && (hr !== false)){
        localStorage.setItem('hero', false);
        location.reload();
    }
    if ((ta !== true) && (ta !== false)){
        localStorage.setItem('timeatthebar', false);
        location.reload();
    }
},500);


setInterval(function() {
    totpinmod.innerHTML = storageTotalPints;
    totpubmod.innerHTML = pubssaved;
},50);