var primary = $( "#primarycolour" );
var secondary = $( "#secondarycolour" );
var tertiary = $( "#tertiarycolour" );
var text = $( "#textcolour" );

var p1 = $( "#primarybackground" );


setInterval(function(){
    if (primary.val() != ""){
        var primaryval = primary.val();
        p1.css( "background-color", primaryval );
    }
}, 10);
