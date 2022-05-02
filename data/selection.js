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

export const chWeapons = [
  {
    title: "Bath",
    img: "/../public/selections/bath.png",
    desc: "This is a bath."
  },
  {
    title: "CO2",
    img: "/../public/selections/co2.png",
    desc: "This is a CO2 chamber."
  },
  {
    title: "Tongs",
    img: "/../public/selections/tongs.png",
    desc: "This is a pair of electric tongs."
  }
]

export const copiWeapons = [
  {
    title: "CO2",
    img: "/../public/selections/co2.png",
    desc: "This is a CO2 chamber."
  },
  {
    title: "Gun",
    img: "/../public/selections/gun.png",
    desc: "This is a captive bolt gun."
  },
  {
    title: "Tongs",
    img: "/../public/selections/tongs.png",
    desc: "This is a pair of electric tongs."
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


// ------------------------
// Arrays for chicken paths
// ------------------------

export const chba = [

]

export const chco2 = [
  {
    animal: "/../public/ch/chDefault.png",
    weapon: "/../public/weapons/co2.png"
  }
]

export const chto = [

]