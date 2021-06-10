//for of / in

const nums = [10, 20, 30, 40, 50];

for (let num of nums) {
  console.log(num);
}

//배열안에 속성을 제어할때 사용함
// 잘 사용안함

const dog = {
  name: "멍멍이",
  sound: "멍멍",
  age: 12,
};

console.log(Object.keys(dog)); // ['name', 'sound', 'age']

console.log(Object.values(dog)); // [ '멍멍이', '멍멍', 12 ]
console.log(Object.entries(dog));
//[ [ 'name', '멍멍이' ], [ 'sound', '멍멍' ], [ 'age', 12 ] ]

for (let key in dog) {
  console.log(`${key} : ${dog[key]}`);
}
//name : 멍멍이
//sound : 멍멍
//age : 12
