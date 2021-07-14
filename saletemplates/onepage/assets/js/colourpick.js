var wheel = $('#colourpick');

var bg = $('#bgcolour');
var hd = $('#hdcolour');
var fn = $('#fncolour');

var body = $('#body');
var s1 = $('#s1');
var s2 = $('#s2');
var s3 = $('#s3');

setInterval(function(){
    bg = $('#bgcolour').value;
    hd = $('#hdcolour').value;
    fn = $('#fncolour').value;
    if (bg !== "") {
        body.style.background = bg;
        s1.style.background = bg;
        s2.style.background = bg;
        s3.style.background = bg;
    }
}, 100);