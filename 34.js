// rest 파라미터

function sum(...rest) {
  return rest.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));

function max(...rest) {
  return rest.reduce((acc, cur) => {
    if (acc < cur) {
      return (acc = cur);
    } else {
      return acc;
    }
  }, 0);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
