import { useRouter } from "next/router";
import styled from "styled-components";

import Continue from "../comps/Continue";
import Nav from "../comps/Nav";
import Tile from "../comps/Tile";
import { getAnimal, getWeapon } from "../data/selection";
import Backk from "../comps/Back";


export default function WeaponsPage() {

  const r = useRouter();
  let a = getAnimal();
  let w = getWeapon();

  return <div>
    <Backk />
    <Nav />
    <Tile />
    <Continue />
  </div>
}