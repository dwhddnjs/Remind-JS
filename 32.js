// spread rest

const slime = {
  name: "슬라임",
};

const cuteSlime = {
  ...slime,
  attribute: "cute",
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: "purple",
};

const greenCuteSlime = {
  ...purpleCuteSlime,
  color: "green",
};

const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
