// 배열

const arr = [1, 2, 3, 4, 5];

console.log(arr);

const arr2 = [1, "dd", {}, 4];
console.log(arr2[1]); // 1

const obj = [{ name: "멍멍이" }, { name: "야옹이" }];

console.log(obj[0]);
console.log(obj[1].name);

obj.push({ name: "멍뭉이" });

console.log(obj.length);

const arr3 = [1, true, { a: 1 }];

console.log(arr[3]);
