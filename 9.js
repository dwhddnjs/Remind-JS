//객체는 우리가 어떠한 값을 선언할 때 하나에 틀에 여러값을 넣을 수있음

const dogName = "멍멍이";
const dogAge = 2;

const dog = {
  name: "멍멍이", //key: value
  age: 2,
  cute: true,
  sample: {
    a: 1,
    b: 2,
  },
};

console.log(dog.name);
console.log(dog.age);

const ironMan = {
  name: "토니스타크",
  actor: "로버트다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐로저스",
  actor: "크리스에반스",
  alias: "캡틴아메리카",
};

function print({ alias, name }) {
  //   const { alias, name } = hero;
  const text = `${alias}은 ${name}`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
