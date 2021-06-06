var totpinmod = document.getElementById("totpinmod");
var totpubmod = document.getElementById("totpubmod");

var firpic = document.getElementById("firpic");
var firpicu = document.getElementById("firpicu");

var dobpic = document.getElementById("dobpic");
var dobpicu = document.getElementById("dobpicu");

var outpic = document.getElementById("outpic");
var outpicu = document.getElementById("outpicu");

var wekpic = document.getElementById("wekpic");
var wekpicu = document.getElementById("wekpicu");

var locpic = document.getElementById("locpic");
var locpicu = document.getElementById("locpicu");

var bigpic = document.getElementById("bigpic");
var bigpicu = document.getElementById("bigpicu");

var patpic = document.getElementById("patpic");
var patpicu = document.getElementById("patpicu");

var ironpic = document.getElementById("ironpic");
var ironpicu = document.getElementById("ironpicu");

var heropic = document.getElementById("heropic");
var heropicu = document.getElementById("heropicu");
var herotext = document.getElementById("hero-text");
var herotextu = document.getElementById("hero-textu");

var tabpic = document.getElementById("tabpic");
var tabpicu = document.getElementById("tabpicu");
var tabtext = document.getElementById("tab-text");
var tabtextu = document.getElementById("tab-textu");

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
    if ((fp !== "true") && (fp !== "false")){
        localStorage.setItem('firstpint', false);
        location.reload();
    }
    if ((dp !== "true") && (dp !== "false")){
        localStorage.setItem('doubleparked', false);
        location.reload();
    }
    if ((oo !== "true") && (oo !== "false")){
        localStorage.setItem('outout', false);
        location.reload();
    }
    if ((wk !== "true") && (wk !== "false")){
        localStorage.setItem('weekender', false);
        location.reload();
    }
    if ((tl !== "true") && (tl !== "false")){
        localStorage.setItem('thelocal', false);
        location.reload();
    }
    if ((bs !== "true") && (bs !== "false")){
        localStorage.setItem('bigspender', false);
        location.reload();
    }
    if ((pa !== "true") && (pa !== "false")){
        localStorage.setItem('patriot', false);
        location.reload();
    }
    if ((il !== "true") && (il !== "false")){
        localStorage.setItem('ironliver', false);
        location.reload();
    }
    if ((hr !== "true") && (hr !== "false")){
        localStorage.setItem('hero', false);
        location.reload();
    }
    if ((ta !== "true") && (ta !== "false")){
        localStorage.setItem('timeatthebar', false);
        location.reload();
    }
},500);


setInterval(function() {
    totpinmod.innerHTML = storageTotalPints;
    totpubmod.innerHTML = pubssaved;
},50);

setInterval(function() {
    if (fp === "true") {
        firpic.style.display = "none";
        firpicu.style.display = "block";
    }
    if (dp === "true") {
        dobpic.style.display = "none";
        dobpicu.style.display = "block";
    }
    if (oo === "true") {
        outpic.style.display = "none";
        outpicu.style.display = "block";
    }
    if (wk === "true") {
        wekpic.style.display = "none";
        wekpicu.style.display = "block";
    }
    if (tl === "true") {
        locpic.style.display = "none";
        locpicu.style.display = "block";
    }
    if (bs === "true") {
        bigpic.style.display = "none";
        bigpicu.style.display = "block";
    }
    if (pa === "true") {
        patpic.style.display = "none";
        patpicu.style.display = "block";
    }
    if (il === "true") {
        ironpic.style.display = "none";
        ironpicu.style.display = "block";
    }
    if (hr === "true") {
        heropic.style.display = "none";
        heropicu.style.display = "block";
        herotext.style.display = "none";
        herotextu.style.display = "block";
    }
    if (ta === "true") {
        tabpic.style.display = "none";
        tabpicu.style.display = "block";
        tabtext.style.display = "none";
        tabtextu.style.display = "block";
    }
},100);