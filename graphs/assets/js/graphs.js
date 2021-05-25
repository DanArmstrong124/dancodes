var h0 = document.getElementById("high0");
var l0 = document.getElementById("low0");
var m0 = document.getElementById("med0");
var d0 = document.getElementById("dif0");

var h1 = document.getElementById("high1");
var l1 = document.getElementById("low1");
var m1 = document.getElementById("med1");
var d1 = document.getElementById("dif1");

var h2 = document.getElementById("high2");
var l2 = document.getElementById("low2");
var m2 = document.getElementById("med2");
var d2 = document.getElementById("dif2");

var h3 = document.getElementById("high3");
var l3 = document.getElementById("low3");
var m3 = document.getElementById("med3");
var d3 = document.getElementById("dif3");

var coin = "XRP";

var high0 = 0.9567;
var low0 = 0.8151;
var med0 = high0 + low0 / 2;
var dif0 = high0 - low0;

var high1 = 0.967;
var low1 = 0.65;
var med1 = high1 + low1 / 2;
var dif1 = high1 - low1;

var high2 = 0.9499;
var low2 = 0.755;
var med2 = high2 + low2 / 2;
var dif2 = high2 - low2;

var high3 = 1.0596;
var low3 = 0.88;
var med3 = high3 + low3 / 2;
var dif3 = high3 - low3;


setTimeout(function() {
    h0.innerHTML = high0;
    l0.innerHTML = low0;
    m0.innerHTML = med0;
    d0.innerHTML = dif0;

    h1.innerHTML = high1;
    l1.innerHTML = low1;
    m1.innerHTML = med1;
    d1.innerHTML = dif1;

    h2.innerHTML = high2;
    l2.innerHTML = low2;
    m2.innerHTML = med2;
    d2.innerHTML = dif2;

    h3.innerHTML = high3;
    l3.innerHTML = low3;
    m3.innerHTML = med3;
    d3.innerHTML = dif3;
}, 50);