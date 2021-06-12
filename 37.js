//비동기의 처리의 이해

function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 100000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 2);
}

console.log("작업시작");
work((ms) => {
  console.log("작업끝");
  console.log(ms + "ms 걸렸다고함");
});
console.log("다음 작업");
