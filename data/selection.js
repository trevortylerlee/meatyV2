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

// Creating variable and function for when user selects animal
var animal = "";

export function changeAnimal(a) {
  animal = a;
  console.log(animal);
}

export function getAnimal() {
  return animal;
}