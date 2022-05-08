// Premade components
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// My components
import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

// Data
import { chba, chco2, chto, ch, cogun } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Styled components
const Container = styled.div`
  widtH: 400px;
  height: 90vh;
  margin: 0 auto;
  outline: 2px red solid;
  cursor: url(/../public/glyphs/reticle.png), crosshair;

  .hover:hover {
    filter: drop-shadow(4px 4px 8px red);
    cursor: pointer;
  }

  .coDefault {
    position: relative;
    width: 250px;
    height: 250px;
    top: 100px;
    left: 70px;
  }

  .gunDefault {
    position: relative;
    width: 400px;
    height: 400px;
    left: 240px;
    top: 50px;
    transform: rotate(20deg);
  }

  .circle {
    position: relative;
    top: -510px;
    left: 240px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }
  .circle:hover {
    background-color: green;
    transform: scale(0.8);
    transition: 0.3s;
  }
  .circle:active {
    transform: scale(1.1);
    background-color: yellow;
  }
`

// Page content starts below

export default function CowIndex() {

  let r = useRouter();
  let {page} = r.query;
  let w = getWeapon();

  if (page === undefined) {
    page = 0;
  }

  if (page === 0) {
    if (w === "CO2") {
      alert("CO2 for cow")
    } else if (w === "Gun") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="coDefault">
            <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="gunDefault">
            <Image src={cogun[0].weapon} layout="fill" objectFit='contain' />
          </div>
          <div className="circle"></div>
        </Container>
      </div>
    }
  }
}