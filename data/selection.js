export const animals = [
  {
    title: "Chicken",
    img: "/../public/selections/chickenFace.png",
    desc: "This is a chicken."
  },
  {
    title: "Cow",
    img: "/../public/selections/cowFace.png",
    desc: "This is a cow."

  },
  {
    title: "Pig",
    img: "/../public/selections/pigFace.png",
    desc: "This is a pig."
  }
]

export const weapons = [
  {
    title: "Bath"
  },
  {
    title: "CO2"
  },
  {
    title: "Gun"
  },
  {
    title: "Tongs"
  }
]

// Creating variable and functions for when user selects animal
let animal = "";

export function changeAnimal(a) {
  animal = a;
  console.log(animal);
}

export function getAnimal() {
  return animal;
}

// Creating variable and functions for when user selects weapon
let weapon = ""; 

export function changeWeapon(w) {
  weapon = w;
  console.log(weapon)
}

export function getWeapon() {
  return weapon;
}