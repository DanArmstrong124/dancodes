var costdiv = $('#cost');

var totalcost = 250;

setInterval(function(){
    costdiv.HTML = "Total Cost: £" + totalcost;
}, 100);