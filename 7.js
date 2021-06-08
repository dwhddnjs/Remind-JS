//함수는 파라미터라는 input을 받아서 함수내부의 로직을 거쳐 output 결과를 반환함
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum); // 3

function hello(name) {
  console.log("hello" + name);
}

hello("이종원"); // 'helle이종원'

//ES6 ECMAScript
//Template Literal
function hihi(name) {
  console.log(`hihi ${name}!`);
}
hihi("이종원");

//함수는 return을 적으면 함수가 끝나버림

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "b+";
  } else if (score >= 80) {
    return "b";
  } else {
    return "C";
  }
}

const grade = getGrade(100);
console.log(grade); // A+

const grade2 = getGrade(95);
console.log(grade2); // A

