const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function use(animal) {
  return [
    animal.name,
    function () {
      return animal.sound;
    }
  ];
}

export default animals;
export { use };
