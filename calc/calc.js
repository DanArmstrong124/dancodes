var sitenuminp = document.getElementById('sitenum');
var sitecostinp = document.getElementById('sitecost');
var staffreqp = document.getElementById('staffreq');
var incomep = document.getElementById('income');
var staffpayp = document.getElementById('staffpay');
var takeawayp = document.getElementById('takeaway');

//Every 10 Website = 1 Staff
//Staff pay 10%

setInterval(function(){
    var sites = parseInt(sitenuminp.value);
    var costs = parseInt(sitecostinp.value);

    var staffreq = (sites / 10);
    var income = (sites * costs);

    if ((staffreq > 0) && (staffreq.isInteger())){
        var staffpay = (income * 0.1);
        var takeaway = (income * 0.9);
    }

    if (staffreq < 1){
        var staffpay = 0;
        var takeaway = income;
    }

    staffreqp.innerHTML = staffreq;
    staffpayp.innerHTML = staffpay;
    incomep.innerHTML = income;
    takeawayp.innerHTML = takeaway;
},50);