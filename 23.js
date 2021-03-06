// 프로토타입과 클래스 객체 생성자

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

const dog = new Animal("개", "멍멍이", "멍멍");

const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();
