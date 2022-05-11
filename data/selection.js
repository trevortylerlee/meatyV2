export const animals = [
  {
    title: "Chicken",
    img: "/../public/selections/chickenFace.png",
    desc: "A chicken is a bird. One of the features that differentiate’s it from most other birds is that it has a red comb and two red wattles under it’s beak.",
    species: "Gallus domesticus"
  },
  {
    title: "Cow",
    img: "/../public/selections/cowFace.png",
    desc: "Cows are four-footed and have a large body. It has two horns, two eyes plus two ears and one nose and a mouth. Cows are herbivorous animals. They have a lot of uses to mankind.",
    species: "Bos taurus"
  },
  {
    title: "Pig",
    img: "/../public/selections/pigFace.png",
    desc: "Pigs are stoud-bodied,short-legged, omnivorous mammals. They are highly intelligent and social animals, and are found all over the globe.",
    species: "Sus domesticus"
  }
]

export const chWeapons = [
  {
    title: "Bath",
    img: "/../public/selections/bath.png",
    desc: "The electric waterbath stunning method is the most used method of stunning chickens as of today. It’s quick and efficent. Can stun more than one chicken at a time."
  },
  {
    title: "CO2",
    img: "/../public/weapons/co2.png",
    desc: "The CO2 chamber stuns the animal by using a 70% to 90% carbon dioxide concentrate. "
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
    desc: "The CO2 chamber stuns the animal by using a 70% to 90% carbon dioxide concentrate. "
  },
  {
    title: "Gun",
    img: "/../public/selections/gun.png",
    desc: "A captive bolt (also variously known as a cattle gun, stunbolt gun, bolt gun, or stunner) is a device used for stunning animals prior to slaughter."
  },
  {
    title: "Tongs",
    img: "/../public/selections/tongs.png",
    desc: "This method of stunning can be carried out on individual animals. he electrodes are connected to insulated blocks at the ends of the tongs.."
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
    animal: "/../public/ch/chDefeather.png",
    weapon: "/../public/weapons/cleaver.png"
  },
  {
    body: "/../public/ch/chBody.png",
    head: "/../public/ch/chHead.png",
  },
  {
    disembowel: "/../public/ch/disembowel.png",
    disemboweled: "/../public/ch/disemboweled.png",
    intestines: "/../public/ch/intestines.png",
    kidneys: "/../public/ch/kidneys.png",
    lungs: "/../public/ch/lungs.png",
    heart: "/../public/ch/heart.png",
    liver: "/../public/ch/liver.png"
  }
]

export const feathers = [
  {
    chicken: "/../public/ch/defeather1.png",
    feather: "/../public/ch/feather.png"
  },
  {
    chicken: "/../public/ch/defeather2.png"
  },
  {
    chicken: "/../public/ch/defeather3.png"
  },
  {
    chicken: "/../public/ch/defeather4.png"
  },
  {
    chicken: "/../public/ch/defeather5.png"
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

export const coto = [
  {
    animal: "/../public/co/coSlitStun.png"
  }
]

export const electric = [
  {
    bolt: "/../public/weapons/electric1.png"
  },
  {
    bolt: "/../public/weapons/electric2.png"
  },
  {
    bolt: "/../public/weapons/electric3.png"
  },
  {
    bolt: "/../public/weapons/electric4.png"
  },
]