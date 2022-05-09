import styled from "styled-components";
import { useRouter } from "next/router";

import { getAnimal } from "../data/selection";

const NavBar = styled.div`
  text-align: center;
  cursor: pointer;
  color: red;
`

export default function Nav() {

  const r = useRouter();

  function resetAnimal() {
    r.push("/")
  }

  return <NavBar>
    <h1 onClick={
      ()=>resetAnimal()
      }>MEATY</h1>
  </NavBar>
}