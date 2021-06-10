//퀴즈
function sumOf(num) {
  return num.reduce((acc, cur) => {
    return acc + cur;
  });
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

function biggerThanThree(num) {
  return num.filter((el) => {
    if (el > 3) {
      return true;
    }
  });
}

const num = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(num));
