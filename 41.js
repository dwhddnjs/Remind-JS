//promise all

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  try {
    const [dog, rabbit, turtle] = await Promise.all([
      getDog(),
      getTurtle(),
      getRabbit(),
    ]);
  } catch (e) {
    console.error(e);
  }
}

process();
