var testpass = localStorage.getItem('testerpass');
setInterval(function(){
    if (testpass !== "tabdev"){
        localStorage.setItem('testerpass', false);
        window.location.href = "https://www.dancodes.co.uk/login";
    }
},50);