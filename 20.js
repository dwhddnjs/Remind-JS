// shift pop unshift push

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
