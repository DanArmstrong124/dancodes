setInterval(function(){
    var primary = $( "#primarycolour" );
    var secondary = $( "#secondarycolour" );
    var tertiary = $( "#tertiarycolour" );
    var text = $( "#textcolour1" );
    var othertext = $( "#textcolour2" );
    var hftext = $( "#hftextcolour" );

    var p1 = $( "#primarybackground" );
    var p2 = $( "#about" );
    var s1 = $( "#mainNav" );
    var s2 = $( "#footerColour" )
    var t1 = $( "#portfolio" );
    var t2 = $( "#contact" );
    var headtext = $( "#headertext" );
    var foottext = $( "#footertext" );

    if (primary.val() !== ""){
        var primaryval = primary.val();
        p1.css( "background-color", primaryval );
        p2.css( "background-color", primaryval );
    }
    if (secondary.val() !== ""){
        var secondaryval = secondary.val();
        s1.css( "background-color", secondaryval );
        s2.css( "background-color", secondaryval );
    }
    if (tertiary.val() !== ""){
        var tertiaryval = tertiary.val();
        t1.css( "background-color", tertiaryval );
        t2.css( "background-color", tertiaryval );
    }
    if (text.val() !== ""){
        var textval = text.val();
        p1.css( "color", textval );
        p2.css( "color", textval );
    }
    if (othertext.val() !== ""){
        var othertextval = othertext.val();
        t1.css( "color", othertextval );
        t2.css( "color", othertextval );
    }
    if (hftext.val() !== ""){
        var hftextval = hftext.val();
        headtext.css( "color", hftextval );
        foottext.css( "color", hftextval );
    }
}, 10);
