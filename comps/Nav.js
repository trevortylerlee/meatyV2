import styled from "styled-components";
import { useRouter } from "next/router";
import useSound from "use-sound";
import Backk from "./Back";

const NavBar = styled.div`
  width: 100%;
  z-index: 1;

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

  .back {
    margin-top: 2rem;
    cursor: pointer;
  }
  .back:hover {
    color: red;
    transition: 0.2s;
    text-decoration: underline;
  }
  .back:active {
    position: relative;
    top: 2px;
  }

  .navCont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .col {
    flex: 1 0 18%;
  }
`

export default function Nav() {

  const r = useRouter();
  const [toc] = useSound("/sounds/toc.mp3");

  function resetAnimal() {
    r.push("/animalselection")
  }

  return <NavBar>
  <div className="navCont">
  <div className="col">
    <span className="back">
      <Backk />
    </span>
  </div>
  <div className="col"></div>
  <div className="col">
    <div className="logo" onClick={
      () => {
        {toc("/sounds/toc.mp3")};
        resetAnimal()
    }}>
    </div>
  </div>
  <div className="col"></div>
  <div className="col"></div>
  </div>
  </NavBar>
}