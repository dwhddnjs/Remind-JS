//객체 안에 함수 넣기

const dog = {
  name: "멍멍이",
  sound: "멍멍",
  say() {
    console.log(this.sound);
  },
};

dog.say();
//하지만 객체안에 화살표 함수를 작성시 this가 작동을 안함으로 에러가 발생함

const cat = {
  name: "야옹이",
  sound: "야옹~",
};

cat.say = dog.say;
cat.say();
