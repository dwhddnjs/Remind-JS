//조건문 더 똒똒하게 쓰끼
function animal(text) {
  const ani = ["고양이", "개", "거북이"];
  return ani.includes(text);
}

console.log(animal("개"));
console.log(animal("게"));

function getSound(ani) {
  const sounds = {
    개: "멍멍",
    고양이: "야옹",
    참새: "짹쩩",
    비둘기: "구구",
  };
  return sounds[ani] || "...?";
}

console.log(getSound("개"));
console.log(getSound("비둘기"));
console.log(getSound("인간"));

function makeSound(animal) {
  const tasks = {
    게: () => {
      console.log("멍멍");
    },
    고양이() {
      console.log("야옹");
    },
  };
  const task = tasks[animal];
  if (!tasks[animal]) {
    console.log(",,,,??");
    return;
  }
  task();
}

makeSound("개");
makeSound("고양이");
