// forEach
const hero = ["아이언맨", "캡아", "토르", "닥스"];

function print(arr) {
  console.log(arr);
}

hero.forEach(print);

hero.forEach((el) => {
  console.log(el);
});
