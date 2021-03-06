
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
var pintspersecond = $( "#pintasec" );
var buystaff = $( "#buystaff" );

var pintasecond = 0;
var currentprice = 1.50;
var pintamount = 0;
var pintfiller = 0;
var moneyamount = 0;
var sellamount = 0;

var staffpower = 0.1;
var staffowned = 0;
var staffincome = 0;
var staffcost = 50;

var clickpower = 0.05;

pintglass.click(function() {
  pintamount = pintamount + clickpower;
  pintfiller = pintfiller + clickpower;
});

/* Auto Pints */
buystaff.click(function() {
    if (staffcost <= moneyamount) {
        staffowned = staffowned + 1;
        moneyamount = moneyamount - staffcost;
        staffcost = staffcost * 1.05;
        pintasecond = pintasecond + staffpower;
    }
});

setInterval(function() {
    staffincome = staffpower * staffowned;
    pintamount = pintamount + staffincome;
    pintfiller = pintfiller + staffincome;
}, 1000);

/* Selling pints */

sellbtn.click(function() {
    pintamount = 0;
    moneyamount = moneyamount + sellamount;
    pintfiller = 0;
    per20.css( "background-color", "white" );
    per40.css( "background-color", "white" );
    per60.css( "background-color", "white" );
    per80.css( "background-color", "white" );
    per100.css( "background-color", "white" );
    foam.css( "background-color", "white" );
});

/* Updating text values */
setInterval(function() {
    pinttotal.html("PINTS: " + pintamount.toFixed(2));
    currentpricetext.html("PRICE: " + currentprice.toFixed(2));
    sellamount = currentprice.toFixed(2) * pintamount.toFixed(2);
    sellbtn.html("SELL: " + sellamount.toFixed(2));
    moneytotal.html("£" + moneyamount.toFixed(2));
    pintspersecond.html("PINTS/second: " + pintasecond.toFixed(2));
    buystaff.html("BUY STAFF (+0.1 Pints/seconds): £" + staffcost.toFixed(2));
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
        if ((clickpower <= 0.99) || (pintasecond <= 0.99))  {
            pintfiller = 0;
        }
    }
}, 10);