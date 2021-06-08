var totpinmod = document.getElementById("totpinmod");
var totpubmod = document.getElementById("totpubmod");

var firpic = document.getElementById("firpic");
var firpicu = document.getElementById("firpicu");
var firstpintpic = document.getElementById("firstpintpic");

var dobpic = document.getElementById("dobpic");
var dobpicu = document.getElementById("dobpicu");
var doubleparkedpic = document.getElementById("doubleparkedpic");

var outpic = document.getElementById("outpic");
var outpicu = document.getElementById("outpicu");
var outoutpic = document.getElementById("outoutpic");

var wekpic = document.getElementById("wekpic");
var wekpicu = document.getElementById("wekpicu");
var weekenderpic = document.getElementById("weekenderpic");

var locpic = document.getElementById("locpic");
var locpicu = document.getElementById("locpicu");
var thelocalpic = document.getElementById("thelocalpic");

var bigpic = document.getElementById("bigpic");
var bigpicu = document.getElementById("bigpicu");
var bigspenderpic = document.getElementById("bigspenderpic");

var patpic = document.getElementById("patpic");
var patpicu = document.getElementById("patpicu");
var patriotpic = document.getElementById("patriotpic");

var ironpic = document.getElementById("ironpic");
var ironpicu = document.getElementById("ironpicu");
var ironliverpic = document.getElementById("ironliverpic");

var awarepic = document.getElementById("awarepic");
var awaretext = document.getElementById("aware-text");
var awaretextu = document.getElementById("aware-textu");

var heropic = document.getElementById("heropic");
var heropicu = document.getElementById("heropicu");
var herotext = document.getElementById("hero-text");
var herotextu = document.getElementById("hero-textu");
var heropicture = document.getElementById("heropicture");

var tabpic = document.getElementById("tabpic");
var tabpicu = document.getElementById("tabpicu");
var tabtext = document.getElementById("tab-text");
var tabtextu = document.getElementById("tab-textu");
var timeatthebarpic = document.getElementById("timeatthebarpic");

var fp = localStorage.getItem('firstpint');
var dp = localStorage.getItem('doubleparked');
var oo = localStorage.getItem('outout');
var wk = localStorage.getItem('weekender');
var tl = localStorage.getItem('thelocal');
var bs = localStorage.getItem('bigspender');
var pa = localStorage.getItem('patriot');
var il = localStorage.getItem('ironliver');
var aw = localStorage.getItem('aware');
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
var faw = localStorage.getItem('faware');
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
    if ((aw !== "true") && (aw !== "false")){
        localStorage.setItem('aware', false);
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
    if ((faw !== "true") && (faw !== "false")){
        localStorage.setItem('faware', true);
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

var awareclick = localStorage.getItem('awareclick');

setTimeout(function(){
    if ((awareclick !== "true") && (awareclick !== "false")){
        localStorage.setItem("awareclick", false);
        location.reload();
    }
}, 50);


setInterval(function() {
    totpinmod.innerHTML = storageTotalPints;
    totpubmod.innerHTML = pubssaved;
},50);

setInterval(function() {
    if (fp === "true") {
        //firpic.style.display = "none";
        //firpicu.style.display = "block";
        firstpintpic.style.backgroundImage = "url('firstpintunlocked.png')"
    }
    if (dp === "true") {
       //dobpic.style.display = "none";
        //dobpicu.style.display = "block";
        doubleparkedpic.style.backgroundImage = "url('doubleparkedunlocked.png')"
    }
    if (oo === "true") {
        //outpic.style.display = "none";
        //outpicu.style.display = "block";
        outoutpic.style.backgroundImage = "url('outoutunlocked.png')"
    }
    if (wk === "true") {
        //wekpic.style.display = "none";
        //wekpicu.style.display = "block";
        weekenderpic.style.backgroundImage = "url('weekenderunlocked.png')"
    }
    if (tl === "true") {
        //locpic.style.display = "none";
        //locpicu.style.display = "block";
        thelocalpic.style.backgroundImage = "url('thelocalunlocked.png')"
    }
    if (bs === "true") {
        //bigpic.style.display = "none";
        //bigpicu.style.display = "block";
        bigspenderpic.style.backgroundImage = "url('bigspenderunlocked.png')"
    }
    if (pa === "true") {
        //patpic.style.display = "none";
        //patpicu.style.display = "block";
        patriotpic.style.backgroundImage = "url('patriotunlocked.png')"
    }
    if (il === "true") {
        //ironpic.style.display = "none";
        //ironpicu.style.display = "block";
        ironliverpic.style.backgroundImage = "url('ironliverunlocked.png')"
    }
    if (aw === "true"){
        awaretext.style.display = "none";
        awaretextu.style.display = "block";
        awarepic.style.backgroundImage = "url('awareunlocked.png')"
    }
    if (hr === "true") {
        //heropic.style.display = "none";
        //heropicu.style.display = "block";
        herotext.style.display = "none";
        herotextu.style.display = "block";
        heropicture.style.backgroundImage = "url('herounlocked.png')"
    }
    if (ta === "true") {
        //tabpic.style.display = "none";
        //tabpicu.style.display = "block";
        tabtext.style.display = "none";
        tabtextu.style.display = "block";
        timeatthebarpic.style.backgroundImage = "url('timeatthebarunlocked.png')"
    }
    if (fp === "false") {
        //firpic.style.display = "block";
        //firpicu.style.display = "none";
        firstpintpic.style.backgroundImage = "url('firstpint.png')"
    }
    if (dp === "false") {
        //dobpic.style.display = "block";
        //dobpicu.style.display = "none";
        doubleparkedpic.style.backgroundImage = "url('doubleparked.png')"
    }
    if (oo === "false") {
        //outpic.style.display = "block";
        //outpicu.style.display = "none";
        outoutpic.style.backgroundImage = "url('outout.png')"
    }
    if (wk === "false") {
        //wekpic.style.display = "block";
        //wekpicu.style.display = "none";
        weekenderpic.style.backgroundImage = "url('weekender.png')"
    }
    if (tl === "false") {
        //locpic.style.display = "block";
        //locpicu.style.display = "none";
        thelocalpic.style.backgroundImage = "url('thelocal.png')"
    }
    if (bs === "false") {
        //bigpic.style.display = "block";
        //bigpicu.style.display = "none";
        bigspenderpic.style.backgroundImage = "url('bigspender.png')"
    }
    if (pa === "false") {
        //patpic.style.display = "block";
        //patpicu.style.display = "none";
        patriotpic.style.backgroundImage = "url('patriot.png')"
    }
    if (il === "false") {
        //ironpic.style.display = "block";
        //ironpicu.style.display = "none";
        ironliverpic.style.backgroundImage = "url('ironliver.png')"
    }
    if (aw === "false") {
        awaretext.style.display = "block";
        awaretextu.style.display = "none";
        awarepic.style.backgroundImage = "url('hidden.png')"
    }
    if (hr === "false") {
        //heropic.style.display = "block";
        //heropicu.style.display = "none";
        herotext.style.display = "block";
        herotextu.style.display = "none";
        heropicture.style.backgroundImage = "url('hidden.png')"
    }
    if (ta === "false") {
        //tabpic.style.display = "block";
        //tabpicu.style.display = "none";
        tabtext.style.display = "block";
        tabtextu.style.display = "none";
        timeatthebarpic.style.backgroundImage = "url('hidden.png')"
    }
},100);

setInterval(function() {
    if (storageTotalPints >= 1){
        localStorage.setItem('firstpint', true);
    }
    if (storageTotalPints <= 0){
        localStorage.setItem('firstpint', false);
    }
    if (storageTotalPints >= 2){
        localStorage.setItem('doubleparked', true);
    }
    if (storageTotalPints <= 1){
        localStorage.setItem('doubleparked', false);
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
        localStorage.setItem('timeatthebar', false);
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
    if (awareclick === "true"){
        localStorage.setItem('aware', true);
    }
    if (awareclick === "false"){
        localStorage.setItem('aware', false);
    }
},50);

var addit = document.getElementById("addit");
var ach = document.getElementById("achievements");
var achmodal = new bootstrap.Modal(document.getElementById('achievementsmodal'), {});
var achmodalclose = document.getElementById("achmodalclose");
var awareclickbtn = document.getElementById("awareclick");

ach.addEventListener("click", function(){
    localStorage.setItem("achopener", "true");
    location.reload();
});

achmodalclose.addEventListener("click", function(){
    localStorage.setItem("achopener", "false");
    location.reload();
});

setInterval(function() {
    if (localStorage.getItem("achopener") === "true"){
        achmodal.show();
    }
}, 50);

awareclickbtn.addEventListener("click", function(){
    if (awareclick === "false"){
        localStorage.setItem("awareclick", true);
        location.reload();
    }
});