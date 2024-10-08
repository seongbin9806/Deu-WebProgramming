var score = 94;
var grade = Math.floor(score / 5);
var grade_str = '';

switch(grade){
    case 20:
    case 19:
        grade_str = '+'; // 소분류 +를 붙인다.
    case 18:
        grade_str = 'A' + grade_str; // 대분류 A를 붙인다.
    break;
    case 17:
        grade_str = '+';
    case 16: 
        grade_str = 'B' + grade_str;
    break;
    case 15:
        grade_str = 'C';
    case 14:   
        grade_str = 'C' + grade_str;
    break;
    default:
        grade_str = 'F';
    break;
}

console.log(score + " = " + grade_str);