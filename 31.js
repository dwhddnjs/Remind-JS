//비구조화 할당

const obj = { a: 1, b: 2 };

const { a, b } = obj;

console.log(a);
console.log(b);

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

// print(obj);

const obj2 = { c: 1 };
const { c, d = 2 } = obj2;
console.log(c);
console.log(d);

const ani = {
  name: "멍멍",
  type: "개",
};

const { name: nickName } = animal;

console.log(nickName);

const arr = [1];

const [one, two = 2] = arr;

const deep = {
  state: {
    inform: {
      name2: "john",
      lang: ["ko", "en", "ch"],
    },
  },
  value: 5,
};

const { name2, lang } = deep.state.inform;
const { value } = deep;

const {
  state: {
    inform: { name, lang },
  },
  value,
} = deep;

const extracted = {
  name2,
  lang,
  value,
};
console.log(extracted);
