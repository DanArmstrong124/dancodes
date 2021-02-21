
var pintglass = $( "#pint" );

var per20 = $( "#20" );
var per40 = $( "#40" );
var per60 = $( "#60" );
var per80 = $( "#80" );
var per100 = $( "#100" );
var foam = $( "#foam" );

var sellbtn = $( "#sell" );

var pinttotal = $( "#pinttotal" );
var moneytotal = $( "#moneytotal" );
var currentpricetext = $( "#currentprice" );

var currentprice = 1.50;
var pintamount = 0;
var pintfiller = 0;
var moneyamount = 0;
var sellamount = 0;

var clickpower = 0.05;

pintglass.click(function() {
  pintamount = pintamount + clickpower;
  pintfiller = pintfiller + clickpower;
});

/* Selling pints */

sellbtn.click(function() {
    pintamount = 0;
    moneyamount = moneyamount + sellamount;
});

/* Updating text values */
setInterval(function() {
    pinttotal.html("PINTS: " + pintamount.toFixed(2));
    currentpricetext.html("PRICE: " + currentprice.toFixed(2));
    sellamount = currentprice.toFixed(2) * pintamount.toFixed(2);
    sellbtn.html("SELL: " + sellamount.toFixed(2))
    moneytotal.html("£" + moneyamount.toFixed(2));
}, 10);

/* Updating colour values */
setInterval(function() {
    if (pintfiller < 0.19) {
        per20.css( "background-color", "white" );
        per40.css( "background-color", "white" );
        per60.css( "background-color", "white" );
        per80.css( "background-color", "white" );
        per100.css( "background-color", "white" );
        foam.css( "background-color", "white" );
    }

    if (pintfiller >= 0.2) {
        per20.css( "background-color", "goldenrod" );
    }

    if (pintfiller >= 0.4) {
        per40.css( "background-color", "goldenrod" );
    }

    if (pintfiller >= 0.6) {
        per60.css( "background-color", "goldenrod" );
    }

    if (pintfiller >= 0.8) {
        per80.css( "background-color", "goldenrod" );
    }

    if (pintfiller >= 1) {
        per100.css( "background-color", "goldenrod" );
        foam.css( "background-color", "lightgrey" );
        if (clickpower <= 0.99) {
            pintfiller = 0;
        }
    }
}, 10);