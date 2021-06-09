var storageGiveawayNum = parseInt(localStorage.getItem('giveawaynum'));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var giveawaynum = getRandomInt(10000000);

setTimeout(function() {
    parseInt(localStorage.setItem('giveawaynum', giveawaynum));
}, 50);

// Random between 0 - 10M