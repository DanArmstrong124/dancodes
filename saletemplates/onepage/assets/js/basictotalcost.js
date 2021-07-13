var costdiv = $('#cost');

var totalcost = 250;

setInterval(function(){
    costdiv.innerHTML = "Total Cost: £" + totalcost;
}, 100);