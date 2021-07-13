var cost = $('#cost');

var totalcost = 250;

setInterval(function(){
    cost.text("Total Cost: £" + totalcost);
}, 100);