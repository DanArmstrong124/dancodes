setInterval(function(){
    var primary = $( "#primarycolour" );
    var secondary = $( "#secondarycolour" );
    var tertiary = $( "#tertiarycolour" );
    var text = $( "#textcolour" );

    var p1 = $( "#primarybackground" );

    if ($( "#primarycolour" ).val() !== ""){
        $( "#primarybackground" ).css( "background-color", $( "#primarycolour" ).val());
    }
}, 300);
