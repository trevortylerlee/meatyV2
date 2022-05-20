export const misc = [
  {
    logo: "/../public/misc/logo.png",
    alt: "/../public/misc/logoColor.png"
  }
]

export const animals = [
  {
    title: "Chicken",
    img: "/selections/chickenFace.png",
    desc: "A chicken is a bird. One of the features that differentiates it from most other birds is that it has a red comb and two red wattles under its beak.",
    species: "Gallus domesticus",
  },
  {
    title: "Cow",
    img: "/selections/cowFace.png",
    desc: "Cows are four-footed and have a large body. It has two horns, two eyes plus two ears and one nose and a mouth. Cows are herbivorous animals. They have a lot of uses to mankind.",
    species: "Bos taurus",
  },
  {
    title: "Pig",
    img: "/selections/pigFace.png",
    desc: "Pigs are stoud-bodied,short-legged, omnivorous mammals. They are highly intelligent and social animals, and are found all over the globe.",
    species: "Sus domesticus",
  }
]

export const chWeapons = [
  {
    title: "Bath",
    img: "/selections/bath.png",
    desc: "Electric waterbath stunning is the most used method of stunning chickens. Chicken's have their heads submerged into the electrified water. As electric currents run through the head and body, the chicken is rendered unconscious."
  },
  {
    title: "CO2",
    img: "/weapons/co2.png",
    desc: "Controlled atmosphere stunning is touted as the most humane matheod of stunning chickens. By reducing handling and transportation, stress and injuries are less common."
  },
  {
    title: "Tongs",
    img: "/weapons/tongs.png",
    desc: "Stunning via electric tongs is a method used around the world. The electrodes of the device are positioned on each side of the head in between the eye and the ear."
  }
]

export const copiWeapons = [
  {
    title: "CO2",
    img: "/selections/co2.png",
    desc: "CO2 chamber stunning is gaining popularity due to their ability to stun multiple animals at once while causing the least amount of stress."
  },
  {
    title: "Gun",
    img: "/selections/gun.png",
    desc: "A captive bolt (also variously known as a cattle gun, stunbolt gun, bolt gun, or stunner) is a device used to stun animals prior to slaughter."
  },
  {
    title: "Tongs",
    img: "/selections/tongs.png",
    desc: "This method of stunning can be carried out on individual animals. The electrodes are placed on each side of the animal's head and an electric current stuns the animal."
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

// Creating a varialbe and a function for the active tile
let state = "";

export function setActive(active) {
  state = active;
  console.log(state);
}



// ------------------------
// Arrays for chicken paths
// ------------------------
export const chba = [
  {
    weapon: "/weapons/bath.png"
  }
]

export const chco2 = [
  {
    animal: "/ch/chDefault.png",
    weapon: "/weapons/chamberOpen.png"
  },
  {
    weapon: "/weapons/chamberChHalf.png"
  },
  {
    weapon: "/weapons/chamberChInside.png"
  }
]

export const chto = [
  {
    weapon: "/weapons/tongs.png",
    skeleton: "/ch/skeleton.png"
  },
  {
    animal: "/ch/chDefaultStun.png",
    weapon: "/weapons/tongsHand.png"
  }
]

export const ch = [
  {
    animal: "/ch/chStun.png",
    weapon: "/weapons/knife.png"
  },
  {
    animal: "/ch/chSlit.png",
    weapon: "/weapons/bloodyKnife.png"
  },
  {
    animal: "/ch/chDefeather.png",
    weapon: "/weapons/cleaver.png"
  },
  {
    body: "/ch/chBody.png",
    head: "/ch/chHead.png",
  },
  {
    disembowel: "/ch/disembowel.png",
    disemboweled: "/ch/disemboweled.png",
    intestines: "/ch/intestines.png",
    kidneys: "/ch/kidneys.png",
    lungs: "/ch/lungs.png",
    heart: "/ch/heart.png",
    liver: "/ch/liver.png"
  }
]

export const feathers = [
  {
    chicken: "/ch/defeather1.png",
    feather: "/ch/feather.png"
  },
  {
    chicken: "/ch/defeather2.png"
  },
  {
    chicken: "/ch/defeather3.png"
  },
  {
    chicken: "/ch/defeather4.png"
  },
  {
    chicken: "/ch/defeather5.png"
  }
]

// -----------------------
// Arrays for cow paths
// -----------------------
export const coco2 = [
  {
    weapon: "/weapons/chamberOpen.png",
    body: "/co/cowBody.png",
    head: "/co/cowHead.png",
    disembowel: "/co/disembowel.png"
  },
  {
    weapon: "/weapons/chamberCoHalf.png"
  },
  {
    weapon: "/weapons/chamberCoInside.png"
  }
]

export const cogun = [
  {
    animal: "/co/coDefault.png",
    weapon: "/selections/gun.png"
  },
  {
    animal: "/co/coDefaultStun.png",
    weapon: "/weapons/gunHand.png",
    shot: "/co/shot.png"
  }
]

export const coto = [
  {
    animal: "/co/coSlitStun.png",
    skeleton: "/co/skeleton.png"
  },
  {
    animal: "/co/coSlit.png"
  }
]

export const electric = [
  {
    bolt: "/weapons/electric1.png"
  },
  {
    bolt: "/weapons/electric2.png"
  },
  {
    bolt: "/weapons/electric3.png"
  },
  {
    bolt: "/weapons/electric4.png"
  },
]

// ---------------------
// Array for pig paths
// ---------------------

export const pico2 = [
  {
    pig: "/public/pi/default.png",
    half: "/public/pi/co2Half.png",
    inside: "/public/pi/co2Inside.png"
  }
]

export const pigun = [
  {
    animal: "/public/pi/front.png",
    weapon: "/public/selections/gun.png"
  },
  {
    animal: "/pi/frontStun.png",
    weapon: "/weapons/gunHand.png",
    shot: "/pi/shot.png"
  }
]

export const pito = [
  {
    animal: "/pi/stun.png",
    skeleton: "/pi/skeleton.png"
  },
  {
    animal: "/pi/slit.png"
  }
]

export const pi = [
  {
    head: "/pi/head.png",
  }
]

export const pipi2 = [
  {
    weapon: "/weapons/chamberOpen.png",
    body: "/pi/body.png",
    head: "/pi/Head.png",
    disembowel: "/pi/disembowel.png"
  },
  {
    weapon: "/weapons/chamberCoHalf.png"
  },
  {
    weapon: "/weapons/chamberCoInside.png"
  }
]