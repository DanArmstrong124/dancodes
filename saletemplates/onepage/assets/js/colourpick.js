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
        body.style.background = $('#bgcolour').value;
        s1.style.background = $('#bgcolour').value;
        s2.style.background = $('#bgcolour').value;
        s3.style.background = $('#bgcolour').value;
    }
}, 100);