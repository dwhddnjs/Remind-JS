//함수의 기본 파라미터

function calcul(r = 2) {
  return Math.PI * r * r;
}

const area = calcul();
console.log(area);

//그냥 파라미터 = 2 이런식으로 기본값으로 설정해준다
