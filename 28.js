//단축 평가 논리 계산법

const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal && animal.name;
}

console.log(getName(dog));
console.log(true && "hello");
console.log(false && "hello");

// '앞에오는 값이 truthy한 값이면' && '뒤에 값 출력한다'
// 앞에오는 값이 falsy하면 && '앞에 값 출력한다'

// truthy  && 뒷 내용
// falsy  && 앞 내용

const namelessDog = {
  name: "",
};

function getName2(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다";
}

console.log(getName2(namelessDog));

console.log(false || "hello");
console.log(undefined || "sss");

//앞에오는 값이 falsy하면 || 뒤에값을 출력
//앞에오는 값이 truthy || 앞에 값을 출력

//falsy || 뒷 내용
//truthy || 앞 내용
