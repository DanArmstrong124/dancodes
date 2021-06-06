var testpass = localStorage.getItem('testerpass');
setInterval(function(){
    if (testpass !== "yellowsubmarine"){
        localStorage.setItem('testerpass', false);
        window.location.href = "https://www.dancodes.co.uk/login";
    }
},50);