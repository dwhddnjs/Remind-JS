//scope

//1,global: 전역 코드의 모든범위에서 사용가능
//2.function: 특정함수에서만 사용가능
//3.block: 블록 내부에서만 사용가능

const value = "hello";

function myFunc() {
  console.log("myfunc");
  console.log(value);
}

function otherFunc() {
  console.log("otherFunc");
  const value = "bye";
  console.log(value);
}

myFunc();
otherFunc();

console.log("global");
console.log(value);
