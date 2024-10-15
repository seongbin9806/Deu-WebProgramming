var change = 28630;
var COIN = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
var nCoins = new Array();

for(let i=0; i<COIN.length; i++) {
    nCoins[i] = Math.floor(change / COIN[i]); 
    change = change % COIN[i];
}

for(let i=0; i<COIN.length; i++) {
    console.log(COIN[i] + ': ' + nCoins[i] + '개');
}