var h1 = document.getElementById("high1");
var l1 = document.getElementById("low1");
var m1 = document.getElementById("med1");
var d1 = document.getElementById("dif1");

var coin = "XRP";
var high1 = 0.967;
var low1 = 0.65;
var med1 = high1 + low1 / 2;
var dif1 = high1 - low1;


setTimeout(function() {
    h1.innerHTML = high1;
    l1.innerHTML = low1;
    m1.innerHTML = med1;
    d1.innerHTML = dif1;
}, 50);