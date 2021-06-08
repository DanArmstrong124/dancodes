var totpinmod = document.getElementById("totpinmod");
var totpubmod = document.getElementById("totpubmod");

var firpic = document.getElementById("firpic");
var firpicu = document.getElementById("firpicu");
var firstpintpic = document.getElementById("firstpintpic");

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

var ffp = localStorage.getItem('ffirstpint');
var fdp = localStorage.getItem('fdoubleparked');
var foo = localStorage.getItem('foutout');
var fwk = localStorage.getItem('fweekender');
var ftl = localStorage.getItem('fthelocal');
var fbs = localStorage.getItem('fbigspender');
var fpa = localStorage.getItem('fpatriot');
var fil = localStorage.getItem('fironliver');
var fhr = localStorage.getItem('fhero');
var fta = localStorage.getItem('ftimeatthebar');



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
},50);

setInterval(function(){
    if ((ffp !== "true") && (ffp !== "false")){
        localStorage.setItem('ffirstpint', true);
        location.reload();
    }
    if ((fdp !== "true") && (fdp !== "false")){
        localStorage.setItem('fdoubleparked', true);
        location.reload();
    }
    if ((foo !== "true") && (foo !== "false")){
        localStorage.setItem('foutout', true);
        location.reload();
    }
    if ((fwk !== "true") && (fwk !== "false")){
        localStorage.setItem('fweekender', true);
        location.reload();
    }
    if ((ftl !== "true") && (ftl !== "false")){
        localStorage.setItem('fthelocal', true);
        location.reload();
    }
    if ((fbs !== "true") && (fbs !== "false")){
        localStorage.setItem('fbigspender', true);
        location.reload();
    }
    if ((fpa !== "true") && (fpa !== "false")){
        localStorage.setItem('fpatriot', true);
        location.reload();
    }
    if ((fil !== "true") && (fil !== "false")){
        localStorage.setItem('fironliver', true);
        location.reload();
    }
    if ((fhr !== "true") && (fhr !== "false")){
        localStorage.setItem('fhero', true);
        location.reload();
    }
    if ((fta !== "true") && (fta !== "false")){
        localStorage.setItem('ftimeatthebar', true);
        location.reload();
    }
},50);


setInterval(function() {
    totpinmod.innerHTML = storageTotalPints;
    totpubmod.innerHTML = pubssaved;
},50);

setInterval(function() {
    if (fp === "yes") {
        //firpic.style.display = "none";
        //firpicu.style.display = "block";
        firstpintpic.style.backgroundImage = "url('firstpintunlocked.png')"
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
    if (fp === "no") {
        //firpic.style.display = "block";
        //firpicu.style.display = "none";
        firstpintpic.style.backgroundImage = "url('firstpint.png')"
    }
    if (dp === "false") {
        dobpic.style.display = "block";
        dobpicu.style.display = "none";
    }
    if (oo === "false") {
        outpic.style.display = "block";
        outpicu.style.display = "none";
    }
    if (wk === "false") {
        wekpic.style.display = "block";
        wekpicu.style.display = "none";
    }
    if (tl === "false") {
        locpic.style.display = "block";
        locpicu.style.display = "none";
    }
    if (bs === "false") {
        bigpic.style.display = "block";
        bigpicu.style.display = "none";
    }
    if (pa === "false") {
        patpic.style.display = "block";
        patpicu.style.display = "none";
    }
    if (il === "false") {
        ironpic.style.display = "block";
        ironpicu.style.display = "none";
    }
    if (hr === "false") {
        heropic.style.display = "block";
        heropicu.style.display = "none";
        herotext.style.display = "block";
        herotextu.style.display = "none";
    }
    if (ta === "false") {
        tabpic.style.display = "block";
        tabpicu.style.display = "none";
        tabtext.style.display = "block";
        tabtextu.style.display = "none";
    }
},100);

setInterval(function() {
    if (storageTotalPints >= 1){
        localStorage.setItem('firstpint', "yes");
    }
    if (storageTotalPints <= 0){
        localStorage.setItem('firstpint', "no");
    }
    if (storageTotalPints >= 2){
        localStorage.setItem('doubleparked', "true");
    }
    if (storageTotalPints <= 1){
        localStorage.setItem('doubleparked', "false");
    }
    if (storageTotalPints >= 10){
        localStorage.setItem('outout', true);
    }
    if (storageTotalPints <= 9){
        localStorage.setItem('outout', false);
    }
    if (storageTotalPints >= 50){
        localStorage.setItem('weekender', true);
    }
    if (storageTotalPints <= 49){
        localStorage.setItem('weekender', false);
    }
    if (storageTotalPints >= 150){
        localStorage.setItem('bigspender', true);
    }
    if (storageTotalPints <= 149){
        localStorage.setItem('bigspender', false);
    }
    if (storageTotalPints >= 400){
        localStorage.setItem('ironliver', true);
    }
    if (storageTotalPints <= 399){
        localStorage.setItem('ironliver', false);
    }
    if (storageTotalPints >= 1000){
        localStorage.setItem('timeatthebar', true);
    }
    if (storageTotalPints <= 999){
        localStorage.setItem('outout', false);
    }
    if (pubssaved >= 1){
        localStorage.setItem('thelocal', true);
    }
    if (pubssaved <= 0){
        localStorage.setItem('thelocal', false);
    }
    if (pubssaved >= 3){
        localStorage.setItem('patriot', true);
    }
    if (pubssaved <= 2){
        localStorage.setItem('patriot', false);
    }
    if (pubssaved >= 5){
        localStorage.setItem('hero', true);
    }
    if (pubssaved <= 4){
        localStorage.setItem('hero', false);
    }
},50);

var addit = document.getElementById("addit");
var ach = document.getElementById("achievements");

function updateAch() {
    if (fp === "yes") {
        //firpic.style.display = "none";
        //firpicu.style.display = "block";
        firstpintpic.style.backgroundImage = "url('firstpintunlocked.png')";
        
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
    if (fp === "no") {
        //firpic.style.display = "block";
        //firpicu.style.display = "none";
        firstpintpic.style.backgroundImage = "url('firstpint.png')";
    }
    if (dp === "false") {
        dobpic.style.display = "block";
        dobpicu.style.display = "none";
    }
    if (oo === "false") {
        outpic.style.display = "block";
        outpicu.style.display = "none";
    }
    if (wk === "false") {
        wekpic.style.display = "block";
        wekpicu.style.display = "none";
    }
    if (tl === "false") {
        locpic.style.display = "block";
        locpicu.style.display = "none";
    }
    if (bs === "false") {
        bigpic.style.display = "block";
        bigpicu.style.display = "none";
    }
    if (pa === "false") {
        patpic.style.display = "block";
        patpicu.style.display = "none";
    }
    if (il === "false") {
        ironpic.style.display = "block";
        ironpicu.style.display = "none";
    }
    if (hr === "false") {
        heropic.style.display = "block";
        heropicu.style.display = "none";
        herotext.style.display = "block";
        herotextu.style.display = "none";
    }
    if (ta === "false") {
        tabpic.style.display = "block";
        tabpicu.style.display = "none";
        tabtext.style.display = "block";
        tabtextu.style.display = "none";
    }
}