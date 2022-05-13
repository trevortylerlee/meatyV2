import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSound from "use-sound";

import { getAnimal, misc } from "../data/selection";

const NavBar = styled.div`
  width: 100%;
  z-index: 1;
  margin-top: 2rem;

  .logo {
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: relative;
    margin: 0 auto;
    margin-top: 8px;
    background-image: url("../misc/logo.png");
    background-size: 50px 50px;
    z-index: 9999;
  }

  .logo:hover {
    background-image: url("../misc/logoColor.png");
    background-size: 50px 50px;
  }
`

export default function Nav() {

  const r = useRouter();
  const [toc] = useSound("sounds/toc.mp3");

  function resetAnimal() {
    r.push("/animalselection")
  }

  return <NavBar>
    <div className="logo" onClick={
      () => {
        {toc("sounds/toc.mp3")};
        resetAnimal()
    }}>
    {/* <Image src={misc[0].logo} layout="fill" objectFit="contain" /> */}
    </div>
  </NavBar>
}