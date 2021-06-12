//promise

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error());
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e);
  });

function increasePrint(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "valueisFiveError";
        rej(error);
        return;
      }
      console.log(value);
      res(value);
    }, 1000);
  });
}

increasePrint(0)
  .then(increasePrint)
  .then(increasePrint)
  .then(increasePrint)
  .then(increasePrint)
  .then(increasePrint)
  .catch((e) => {
    console.error(e);
  });
