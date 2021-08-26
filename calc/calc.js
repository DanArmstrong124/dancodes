var sitenuminp = document.getElementById('sitenum');
var sitecostinp = document.getElementById('sitecost');
var staffreqp = document.getElementById('staffreq');
var incomep = document.getElementById('income');
var staffpayp = document.getElementById('staffpay');
var takeawayp = document.getElementById('takeaway');

//Every 25 Websites = 1 Staff
//Max 4 Staff
//Staff pay 25%

setInterval(function(){
    var sites = parseInt(sitenuminp.value);
    var costs = parseInt(sitecostinp.value);

    var staffreq = (sites / 25);
    
    if (staffreq >= 4){
        staffreq = 4;
    }

    var income = (sites * costs);

    if (staffreq >= 1){
        var staffpay = (income * 0.1);
        var takeaway = (income * 0.9);
    }

    if (staffreq <= 0.9){
        var staffpay = 0;
        var takeaway = income;
    }

    staffreqp.innerHTML = staffreq + " Staff Members Required";
    staffpayp.innerHTML = "£" + staffpay + " Staff Payments";
    incomep.innerHTML = "£" + income + " Total Income";
    takeawayp.innerHTML = "£" + takeaway + " My Takeaway";
},50);