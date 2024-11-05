var str1 = 'Hello';
var str2 = '안녕하세요';

console.log(str1.length); 
console.log(str2.length);

str1 += ' World!';
console.log(str1); // Hello World

var a = 0.1;
var b = '0.1';
console.log(typeof a); // a: number
console.log(typeof b); // b: string

var c = 'c' / a;
console.log(c); // NaN
console.log(typeof c); // number

/* 숫자로 파싱 가능한 문자열은 atoi, stod 계열 함수가 자동 호출 */
var d = b / a; // 0.1 / '0.1'
console.log(d); // 1

var byteLength1 = new TextEncoder().encode(str1).length;
console.log(byteLength1); // 5bytes

var byteLength2 = new TextEncoder().encode(str2).length;
console.log(byteLength2); // 15bytes(한글은 3byte)

var str3 = 'I said "Stop!"';
console.log(str3);

var str4 = "I said 'Stop!'";
console.log(str4);

let flag = str3.length == str3.length;
console.log('str3.length : ' + str3.length); // 14
console.log('str4.length : ' + str4.length); // 14
console.log(flag); // true

// 정의되지 않은 값 undefined
let flag1 = undefined > str4.length;
let flag2 = undefined < str4.length;
console.log(flag1); // false
console.log(flag2); // false

// null은 아스키코드가 0이다. 그래서 0으로 대입된다.
let flag3 = null > str4.length;
let flag4 = null < str4.length;
console.log(flag3); // false
console.log(flag4); // true

console.log(typeof null); // object, 아무것도 없는 object이다.
console.log(typeof undefined); // undefined = undefined 아무것도 정의되지 않음

// (자료형)변수명
console.log(Boolean(null)); // false, null은 0이므로 false로 반환된다.
console.log(Number(Boolean(str4.length))); // 1, true로 변환 -> true는 1이므로 1이 출력

var psn = {
    name: 'John',
    age: 39,
    isFemale: false,
    height: 180,
    weight: 74.0
}

console.log(psn);

psn.weight -= 1.2; // 멤버 변수 접근 방법
console.log(psn);

psn['age'] -= 1; // 해싱 문법 이용
console.log(psn['age']);

var input;
input = (input == undefined? 0 : input);
input = input?? 0;
console.log(input);