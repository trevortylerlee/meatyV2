import { useRouter } from "next/router";

import Tile from "../comps/Tile";
import { getAnimal } from "../data/selection";

export default function WeaponsPage() {

  const r = useRouter();
  let animal = getAnimal();

  if (animal === "Chicken") {
    return <div>
      <p>Chicken weapons</p>
      <Tile />
    </div>
  } else {
    return <div>
      <h1>Uh-oh!</h1>
      <Tile />
    </div>
  }  
}