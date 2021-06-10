// reduce

//배열을 값을 연산할때

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((acc, cur, idx, arr) => {
  if (idx === arr.length - 1) {
    return (acc + cur) / arr.length;
  }
  return acc + cur;
}, 0);
console.log(sum);

// 0 acc의 초기값

const alph = ["a", "a", "a", "b", "c", "c", "d", "e"];
const count = alph.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(count);
