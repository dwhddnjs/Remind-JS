// if 문특정 조건이 만족할 경우 코드를 실행

const a = 1;
if (a + 1 === 2) {
  console.log("a+1이 2입니다");
  const a = 2;
  console.log("if문 안의 a 값은 " + a);
  //"if문 밖의 a 값은" + 2
}

console.log("if문 밖의 a 값은" + a);
//"if문 밖의 a 값은" + 1

const q = 10;
if (q > 15) {
  console.log("a가 15보다 크다");
} else {
  console.log("a가 15보다 크지 않다");
}

if (a === 5) {
  console.log("5");
} else if (a === 10) {
  console.log("10");
} else {
  console.log("5 아니고 10 아니고");
}
