//map , indexOf , findIndex , filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const sq = (n) => {
  return n * n;
};

const sq2 = arr.map(sq);

const sq3 = arr.map((el) => {
  return el * el;
});

const it = [
  { id: 1, text: "hello" },
  { id: 2, text: "bey" },
];

const it2 = it.map((el) => el.text);

const hero = ["아이언맨", "캡아", "토르", "닥스"];

const index = hero.indexOf("토르");

const todo = [
  { id: 1, text: "공부", done: true },
  { id: 2, text: "식사", done: false },
  { id: 3, text: "hello", done: true },
  { id: 4, text: "취미", done: false },
];

//-1 일치하는게 없다 indexOf를 썻을때

const i = todo.findIndex((todo) => todo.id === 2);

const task = todo.filter((todo) => !todo.done);
console.log(task);

console.log(sq2);
console.log(sq3);
console.log(it2);
console.log(index);
console.log(i);
