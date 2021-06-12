//async await

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process().then((value) => {
  console.log(value);
});
