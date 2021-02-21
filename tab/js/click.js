
var pintglass = $( "#pint" );

var pinttotal = $( "#pinttotal" );
var moneytotal = $( "#moneytotal" );

var pintamount = 0;
var moneyamount = 0;

var clickpower = 0.05;

pintglass.click(function() {
  pintamount = pintamount + clickpower;
});

setInterval(function() {
    pinttotal.html("PINTS: " + pintamount.toFixed(2));
}, 10);