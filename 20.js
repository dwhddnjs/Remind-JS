// shift pop unshift push concat join

const num = [10, 20, 30, 40];

const val = num.shift(); // 10
const pop2 = num.pop();

// 기존의 값을 건드림
//shift 는 가장 앞에있는 값을  뺌
//pop은 뒤에있는 값을 뺌

num.unShift(5);
num.push(5);

//unshift 가장 앞에있는 값으로 추가함
//push 가장 뒤에있는 값으로 추가함

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = [1, 2, 3, 4, 5];

console.log(arr.join("/"));

const con = arr1.concat(arr2);
//기존에 값을 건들지 않음
console.log(con);
