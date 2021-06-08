//화살표 함수
const add = (a, b) => {
  return a + b;
};

const sum = add(1, 2);
console.log(sum); //3

const hello = (name) => {
  console.log(`hello ${name}`);
};

hello("이종원");

//더짧게
const add2 = (a, b) => a + b;
const sum = add2(1, 2);
console.log(sum); //3
//똑같이 작동함:
