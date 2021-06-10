// splice slice

const num = [10, 20, 30, 40];

const i = num.indexOf(30);
console.log(i);

// const spliced = num.splice(i, 2);

const sliced = num.slice(0, 2);

// console.log(spliced);
// console.log(num);

console.log(sliced);
console.log(num);

// splice 기존의 배열을 건드림 (해당 인덱스 부터, 갯수)짜름
// slice 기존의 배열을 건들지않고 새로운 배열을 만들어사 가져옴 (시작, 마지막 전 까지)
