import { useRouter } from "next/router";
import styled from "styled-components";

import Tile from "../comps/Tile";
import { getAnimal } from "../data/selection";

const Header = styled.h1`
  text-align: center;
`

export default function WeaponsPage() {

  const r = useRouter();
  let animal = getAnimal();

  return <div>
    <Header>MEATY</Header>
    <Tile />
  </div>
}