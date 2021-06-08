const a = 1;
const b = 2;
const eq = a === b;
console.log(eq); // false
// == 은 데이터 타입은 비교를 안함
// === 데이터 타입까지 검사함
// 웬만하면 ===를 작성해서 정확하게 하자

const c = "c";
const d = "d";
const notEq = c !== b; // true

const q = 10;
const w = 15;
const e = 15;

console.log(a < b); //true
console.log(b > a); //true
console.log(b >= a); //true
console.log(a <= c); // true
console.log(b < c); // false

// = 사인이 부등호 뒤에 옴

const z = "안녕";
const x = "하세요";
console.log(z + b); // '안녕하세여'
