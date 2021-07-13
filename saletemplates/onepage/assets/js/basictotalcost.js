var cost = $('#cost');
var buysec4 = $('#buysec4');
var sec4 = $('#sec4');

var totalcost = 250;
var sec4cost = 30;

buysec4.click(function(){
    totalcost = totalcost + sec4cost;
    buysec4.addClass('hidden');
    buysec4.removeClass('show');
    sec4.addClass('show');
    sec4.removeClass('hidden');
});

setInterval(function(){
    cost.text("Total Cost: £" + totalcost);
}, 100);