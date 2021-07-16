var wheel = $('#colourpick');

var bg = $('#bgcolour');
var hd = $('#hdcolour');
var fn = $('#fncolour');

var body = $('#body');
var s1 = $('#s1');
var s2 = $('#s2');
var s3 = $('#s3');

var nav = $('#nav-bar');

setInterval(function(){
    //if (bg.value() !== "") {
        body.css( "background-color", document.getElementById('bgcolour').value);
        s1.css( "background-color", document.getElementById('bgcolour').value);
        s2.css( "background-color", document.getElementById('bgcolour').value);
        s3.css( "background-color", document.getElementById('bgcolour').value);
        nav.css( "background-color", document.getElementById('hdcolour').value);
        body.css( "color", document.getElementById('fncolour').value);
    //}
}, 100);