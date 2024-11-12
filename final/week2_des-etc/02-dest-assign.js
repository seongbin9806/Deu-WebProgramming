// Destructing(해체) Assignment(할당)
const numbers = [1, 2, 3, 4, 5, 6, 7];
let [first, second, ...remaining] = numbers;
console.log(first);
console.log(second);
console.log(remaining);

const numbers2 = [8, 9];
let [x, y, z=10, ...r] = numbers2;
console.log(x);
console.log(y);
console.log(z);
console.log(r); /* empty array */

// Set: set을 써보자 (중복되는 원소는 허용되지 않는다.)
/* 1.Ordered Set: 순서가 있다고 믿는다 */
/* 2.UnOrdered Set: 순서가 없다고 믿는다 */

console.log('-----set-----');
let set1 = new Set([2, 1, 3, 4, 4, 1]);
// set1 = new Set([...set1].sort((a, b) => a - b));  // Java기준: Compareable implementation해야 한다.
console.log(set1);

let set2 = new Set([6, 3, 7, 5, 4]);
// set2 = new Set([...set2].sort((a, b) => a - b));
console.log(set2);

let set3 = new Set([0, 8, 9, 10, ...set1, ...set2, -1, -2, -3]);
set3 = new Set([...set3].sort((a, b) => a - b));
console.log(set3);