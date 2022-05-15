import { useRouter } from "next/router";
import styled from "styled-components";

import Continue from "../comps/Continue";
import Nav from "../comps/Nav";
import Tile from "../comps/Tile";
import { getAnimal, getWeapon } from "../data/selection";

const Container = styled.div`
  widtH: 400px;
  height: 80vh;
  margin: 0 auto;
  /* outline: 2px red solid; */
`

export default function WeaponsPage() {

  const r = useRouter();
  let a = getAnimal();
  let w = getWeapon();

  return <div>
    <Container>
      <Nav />
      <Tile />
      <Continue />
    </Container>
  </div>
}