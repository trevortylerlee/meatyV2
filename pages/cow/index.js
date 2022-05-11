// Premade components
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSound from 'use-sound';

// My components
import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

// Data
import { chba, chco2, chto, ch, cogun, coco2, coto, electric } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Animations
import { shakeAnimation, electricAnimation, breatheAnimation } from '../../data/animation';

// Styled components
const Container = styled.div`
  widtH: 400px;
  height: 80vh;
  margin: 0 auto;
  outline: 2px red solid;

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
  .coDefaultTong {
    position: relative;
    width: 250px;
    height: 250px;
    top: 150px;
    left: 70px;
  }
  .coTong2 {
    position: relative;
    width: 280px;
    height: 280px;
    top: 280px;
    left: 10px;
  }
  .aContCO2 {
    position: relative;
    width: 250px;
    height: 250px;
    top: 380px;
    left: 40px;
  }
  .wContCO2 {
    position: relative;
    width: 220px;
    height: 220px;
    top: -100px;
    left: 100px;
  }
  .wContCO2Half {
    position: relative;
    width: 220px;
    height: 220px;
    top: 150px;
    left: 100px;
  }

  .gun {
    position: relative;
    width: 200px;
    height: 200px;
    top: 100px;
    margin: 0 auto;
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
    cursor: pointer;
  }
  .circle:active {
    transform: scale(1.1);
    background-color: yellow;
  }

  .tongsCont {
    position: relative;
    width: 300px;
    height: 300px;
    left: 125px;
    top: 100px;
  }
  .tongsCont2 {
    position: relative;
    width: 250px;
    height: 250px;
    left: 160px;
    top: -200px;
  }

  .elec1 {
    position: relative;
    width: 100px;
    height: 100px;
    top: -300px;
    left: 110px;
  }
  .elec2 {
    position: relative;
    width: 60px;
    height: 60px;
    top: -325px;
    left: 220px;
  }
  .elec3 {
    position: relative;
    width: 80px;
    height: 80px;
    top: -350px;
    left: 170px;
  }

  .coStun {
    position: relative;
    width: 340px;
    height: 340px;
    top: 240px;
    left: 30px;
  }

  .knife1 {
    position: relative;
    width: 150px;
    height: 150px;
    left: 120px;
    top: -200px;
    transform: rotate(90deg);
  }
`

// Components for animations
const Co2cont = styled.div`
  animation-name: ${shakeAnimation};
  animation-duration: 0.82s;
  animation-iteration-count: infinite;
`
const Electricity = styled.div`
  animation-name: ${electricAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`
const Electricity2 = styled.div`
  animation-name: ${electricAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`
const Electricity3 = styled.div`
  animation-name: ${electricAnimation};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
`

const Knifecont = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`

// Page content starts below

export default function CowIndex() {

  let r = useRouter();
  let {page} = r.query;
  let w = getWeapon();

  // Sounds
  const [cow] = useSound("/sounds/cow.mp3");
  const [toc] = useSound("/sounds/toc.mp3");
  const [blowdart] = useSound("/sounds/blowdart.mp3");
  const [gas] = useSound("/sounds/gas.mp3");
  const [electricity] = useSound("/sounds/electricity.mp3");

  if (page === undefined) {
    page = 0;
  }

  if (page === 0) { // PAGE 0 //
    if (w === "CO2") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="aContCO2 hover" onClick={
            () => {
              {toc("/sounds.toc.mp3")};
              {cow("/sounds/cow.mp3")};
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="wContCO2">
            <Image src={coco2[0].weapon} layout="fill" objectFit='contain' />
          </div>
        </Container>
      </div>
    } else if (w === "Gun") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="coDefault">
            <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="gun hover" onClick={
            () => {
              { toc("/sounds/toc.mp3") };
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={cogun[0].weapon} layout="fill" objectFit='contain' />
          </div>
        </Container>
      </div>
    } else if (w === "Tongs") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="coDefaultTong">
            <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="tongsCont hover" onClick={
            () => {
              { electricity("/sounds/electricity.mp3") };
              { cow("/sounds/cow.mp3") };
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={chto[0].weapon} layout="fill" objectFit='contain' />
          </div>
        </Container>
      </div>
    } else {
      return <div>
        <Container>
          <Nav />
          <h1>😂😂😂 u broke it moron COW ERROR</h1>
        </Container>
      </div>
    }
  } else if (r.asPath === "/cow?page=1") { // PAGE 1 //
      if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="wContCO2Half hover" onClick={
              () => {
                { gas("/sounds/gas.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}>
              <Image src={coco2[1].weapon} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
      } else if (w === "Gun") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coDefault">
              <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="gunDefault">
              <Image src={cogun[1].weapon} layout="fill" objectFit='contain' />
            </div>
            <div className="circle" onClick={
              () => {
                { blowdart("/sounds/blowdart.mp3") };
                { cow("/sounds/cow.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}></div>
          </Container>
        </div>
      } else {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coTong2">
              <Image src={cogun[1].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="tongsCont2 hover" onClick={
              () => {
                { toc("/sounds/toc.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}>
              <Image src={chto[1].weapon} layout="fill" objectFit='contain' />
            </div>
            <Electricity className='elec1'>
              <Image src={electric[0].bolt} layout="fill" objectFit='contain' />
            </Electricity>
            <Electricity2 className='elec2'>
              <Image src={electric[1].bolt} layout="fill" objectFit='contain' />
            </Electricity2>
            <Electricity3 className='elec3'>
              <Image src={electric[2].bolt} layout="fill" objectFit='contain' />
            </Electricity3>
          </Container>
        </div>
      }
  } else if (r.asPath === "/cow?page=2") { // PAGE 2 //
      if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <Co2cont>
            <div className="wContCO2Half" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}>
              <Image src={coco2[2].weapon} layout="fill" objectFit='contain' />
            </div>
            </Co2cont>
          </Container>
          <Continue />
        </div>
      } else if (w === "Gun") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coDefault">
              <Image src={cogun[1].animal} layout="fill" objectFit='contain' />
            </div>
          </Container>
          <Continue />
        </div>
      } else {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coStun">
              <Image src={coto[0].animal} layout="fill" objectFit='contain' />
            </div>
          </Container>
          <Continue />
        </div>
      }
  } else if (r.asPath === "/cow?page=3") { // PAGE 3 //
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="coStun">
            <Image src={coto[0].animal} layout="fill" objectFit='contain' />
          </div>
          <Knifecont>
            <div className="knife1 hover" onClick={
              () => {
                { toc("/sounds/toc.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}>
              <Image src={ch[0].weapon} layout="fill" objectFit='contain' />
            </div>
          </Knifecont>
        </Container>
      </div>
  }
}