var storageGiveawayNum = parseInt(localStorage.getItem('giveawaynum'));
var giveawaynumberdiv = document.getElementById("giveawaynumber");
var awarelocal = localStorage.getItem('aware');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var giveawaynum = getRandomInt(10000000);

setTimeout(function() {
    if(isNaN(storageGiveawayNum)){
        parseInt(localStorage.setItem('giveawaynum', 0));
        location.reload();
    }
}, 50)

setTimeout(function() {
    if(parseInt(localStorage.getItem('giveawaynum')) === 0) {
        parseInt(localStorage.setItem('giveawaynum', giveawaynum));
    }
}, 100);

setInterval(function() {
    if ((storageTotalPints >= 10) && (timeplayed >= 7200) && (awarelocal === "true")) {
        giveawaynumberdiv.innerHTML()
    }
}, 1000);

// Random between 0 - 10M