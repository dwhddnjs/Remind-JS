//Getter 와 Setter

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum이 실행됨");
    return this.a + this.b;
  },
};

// number.a = 5;
// console.log(numbers); // a:5,b:2
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
//getter는 특정 값을 조회하려고 할때 특정코드를 실행시키고 연산된 값을 사용함

const dog = {
  _name: "멍멍이",
  set name(val) {
    console.log("이름이 바뀝니다 " + val);
    this._name = val;
  },
};
console.log(dog._name);
dog.name = "뭉뭉이";
console.log(dog._name);
