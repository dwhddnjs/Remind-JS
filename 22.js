//퀴즈

function countBiggerThanTen(arr) {
  return arr.reduce((acc, cur) => {
    if (cur <= 10) {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

//사실 진짜 정답은 이거인거 같다

function countBiggerThanTen1(numbers) {
  return numbers.filter((n) => n > 10).length;
}

const count1 = countBiggerThanTen1([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count1); // 5
