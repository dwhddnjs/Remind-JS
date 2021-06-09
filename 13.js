//반복문

//특정작업을 반복적으로 사용할때 사용함
//시작 => 조건 => true => 구문 실행
//=> false => 끝

for (let i = 0; i < 10; i++) {
  console.log(i); //올라감
}

for (let i = 10; i > 0; i--) {
  console.log(i); //내려감
}

const name2 = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < name2.length; i++) {
  console.log(name2[i]);
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let isFun = false;
while (!isFun) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}
