const fruits = ['수박', '오렌지', '사과', '키위'];

console.log('My favorite fruits are: ')

console.log('-----normal for-----');
for (let i=0; i<fruits.length; i++) {
    console.log(`${i + 1}: ${fruits[i]}`);
}

// 고전적인 id 기반의 for의 문제점 해결
console.log('-----for in-----');
for(let x in fruits) {
    console.log(`${fruits[x]}`);
}

console.log('-----for of-----');
for(let x of fruits) {
    console.log(`${x}`);
}

console.log('\n');
let person = {
    name: '최성빈',
    age: 25,
    isMale: true,
    job: 'student',
    nickname: `${fruits[2]}를 좋아하는 성빈씨`
}

console.log('My favorite human is: ');

console.log('-----normal for-----');
for (let i=0; i<person.length; i++) {
    console.log(`${i + 1}: ${person[i]}`);
}

console.log('-----for in-----');
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log('-----for of(Object.values)-----');
/* Object.values - 오브젝트 내에서 value만 가져옴 */
for (let val of Object.values(person)) {
    console.log(`${val}`);
}

console.log('-----for of(Object.entries)-----');
/* Object.entries - 오브젝트 내에서 key, value 모두 추출 */
for (let [key, val] of Object.entries(person)) {
    console.log(`${key}: ${val}`);
}