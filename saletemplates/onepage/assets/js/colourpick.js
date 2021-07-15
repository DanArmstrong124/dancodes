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
        body.css( "background-color", $('#bgcolour').value);
        s1.css( "background-color", $('#bgcolour').value);
        s2.css( "background-color", $('#bgcolour').value);
        s3.css( "background-color", $('#bgcolour').value);
    }
}, 100);