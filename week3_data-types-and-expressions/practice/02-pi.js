var total = 100000000;
var inner = 0;

for(let i=0; i<total; i++){
    let x = Math.random();
    let y = Math.random();

    let d = x ** 2 + y ** 2;

    if(d < 1){
        inner++;
    }
}

var est_pi = inner / total * 4;
var real_pi = Math.PI; //Math.atan(1); 

console.log('#tot:' + total + ', estimate PI = ' + est_pi + ', err = ' + Math.abs(est_pi - real_pi));