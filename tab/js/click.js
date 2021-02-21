
var pintglass = $( "#pint" );

var per20 = $("#20");
var per40 = $("#40");
var per60 = $("#60");
var per80 = $("#80");
var per100 = $("#100");

var pinttotal = $( "#pinttotal" );
var moneytotal = $( "#moneytotal" );

var pintamount = 0;
var moneyamount = 0;

var clickpower = 0.05;

pintglass.click(function() {
  pintamount = pintamount + clickpower;
});

/* Updating text values */
setInterval(function() {
    pinttotal.html("PINTS: " + pintamount.toFixed(2));
}, 10);

/* Updating colour values */
setInterval(function() {
    if (pintamount < 0.19) {
        per20.css( "background-color", white );
        per40.css( "background-color", white );
        per60.css( "background-color", white );
        per80.css( "background-color", white );
        per100.css( "background-color", white );
    }
}, 10);