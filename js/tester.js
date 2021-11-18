var testpass = localStorage.getItem('testerpass');

var unlocked = new function(){
    localStorage.setItem('testerpass', "tabdev");
};

setInterval(function(){
    if (testpass !== "derek"){
        localStorage.setItem('testerpass', false);
        window.location.href = "https://www.dancodes.co.uk/login";
    }
},50);