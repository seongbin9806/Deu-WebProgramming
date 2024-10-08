var p = 0.00001;
var rep = 10000;
var trial = 0;

for(let i=0; i<rep; i++){
    do{
        var rand = Math.random();
        trial++;
    }while(rand > p);
}

console.log('p = ' + p + ', #trial = ' + trial / rep);