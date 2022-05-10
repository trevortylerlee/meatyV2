import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

import { getAnimal, misc } from "../data/selection";

const NavBar = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  margin-top: 8px;
  width: 44px;
  height: 44px;
`

export default function Nav() {

  const r = useRouter();

  function resetAnimal() {
    r.push("/")
  }

  return <NavBar>
    <Image src={misc[0].logo} layout="fill" objectFit="contain" onClick={
      ()=>resetAnimal()
      } />
  </NavBar>
}