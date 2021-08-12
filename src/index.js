import React from "react";
import ReactDOM from "react-dom";
import animals, { use } from "./data";

const [cat, dog] = animals;
const [animal, makeSound] = use(cat);
// console.log(animal);
makeSound();
const [animal1, makeSound1] = use(dog);
// console.log(animal1);
makeSound1();

const {
  feedingRequirements: { food, water }
} = cat;
console.log(food);
console.log(water);

ReactDOM.render(
  <div>
    <h1>{animal}</h1>
    <h1>{animal1}</h1>
    <p>{makeSound1()}</p>
    <p>{makeSound()}</p>
  </div>,
  document.getElementById("root")
);
