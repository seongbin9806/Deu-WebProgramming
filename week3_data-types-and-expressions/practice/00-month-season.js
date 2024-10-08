var month = 3; // 1 ~ 12
var season = Math.floor((month + 9) % 12 / 3);

var month_str;
switch(season){
    case 0:
        month_str = '봄';
    break;
    case 1:
        month_str = '여름';
    break;
    case 2:
        month_str = '가을';
    break;
    case 3:
        month_str = '겨울';
    break;
    default:
    break;
}

console.log(month + " = " + month_str);