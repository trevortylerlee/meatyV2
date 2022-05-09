export const animals = [
  {
    title: "Chicken",
    img: "/../public/selections/chickenFace.png",
    desc: "This is a chicken.",
    species: "Gallus domesticus"
  },
  {
    title: "Cow",
    img: "/../public/selections/cowFace.png",
    desc: "This is a cow.",
    species: "Bos taurus"
  },
  {
    title: "Pig",
    img: "/../public/selections/pigFace.png",
    desc: "This is a pig.",
    species: "Sus domesticus"
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
    img: "/../public/weapons/co2.png",
    desc: "This is a CO2 chamber."
  },
  {
    title: "Tongs",
    img: "/../public/weapons/tongs.png",
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
  {
    weapon: "/../public/weapons/bath.png"
  }
]

export const chco2 = [
  {
    animal: "/../public/ch/chDefault.png",
    weapon: "/../public/weapons/chamberOpen.png"
  },
  {
    weapon: "/../public/weapons/chamberChHalf.png"
  },
  {
    weapon: "/../public/weapons/chamberChInside.png"
  }
]

export const chto = [
  {
    weapon: "/../public/weapons/tongs.png"
  },
  {
    animal: "/../public/ch/chDefaultStun.png",
    weapon: "/../public/weapons/tongsHand.png"
  }
]

export const ch = [
  {
    animal: "/../public/ch/chStun.png",
    weapon: "/../public/weapons/knife.png"
  },
  {
    animal: "/../public/ch/chSlit.png",
    weapon: "/../public/weapons/bloodyKnife.png"
  },
  {
    animal: "/../public/ch/chDefeather.png"
  }
]

// -----------------------
// Arrays for cow paths
// -----------------------
export const coco2 = [
  {
    weapon: "/../public/weapons/chamberOpen.png"
  },
  {
    weapon: "/../public/weapons/chamberCoHalf.png"
  },
  {
    weapon: "/../public/weapons/chamberCoInside.png"
  }
]

export const cogun = [
  {
    animal: "/../public/co/coDefault.png",
    weapon: "/../public/selections/gun.png"
  },
  {
    animal: "/../public/co/coDefaultStun.png",
    weapon: "/../public/weapons/gunHand.png"
  }
]

// An array for the animal photos at the start (and maybe weapons)

export const photos = [
  {
    chicken: "/../public/ch/chickenPhoto.png"
  }
]