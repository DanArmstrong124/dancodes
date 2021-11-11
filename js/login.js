var logincredsinput = document.getElementById("testerpass").value;
var loginbtn = document.getElementById("loginbtn");
var logincreds = "false";

setInterval(function(){
    logincredsinput = document.getElementById("testerpass").value;
}, 50)

loginbtn.addEventListener("click", function(){
    logincreds = logincredsinput;
    localStorage.setItem('testerpass', logincreds);
    if (logincreds === "tabdev2021"){
        alert("Login successful, please re-input the url you are looking for!")
    }
    else{
        alert("Password incorrect, please try again.")
        location.reload();
    }
});