// Premade components
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSound from 'use-sound';

// My components
import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav";

// Data
import { chba, chco2, chto, ch, cogun, coco2, coto, pico2, electric } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Animations
import { shakeAnimation, electricAnimation, breatheAnimation, cutAnimation, cleaverAnimation, headAnimation } from '../../data/animation';
import { glowAnimation } from '../../data/animation';
import { bloodGush, bloodGush2, bloodGushY } from '../../data/animation';
import { intestineAnimation, kidneyAnimation, lungsAnimation, heartAnimation, liverAnimation } from '../../data/animation';
import { motion } from 'framer-motion';

//
const Container = styled.div`
  width: 400px;
  height: 80vh;
  margin: 0 auto;
  outline: 2px red solid;
  overflow: hidden;
  margin-top: 1rem;

  /* Effects */
  .hover:hover {
    filter: drop-shadow(4px 4px 8px lime);
    cursor: pointer;
  }
  .blur {
    filter: blur(4px);
  }
  .italic {
    font-style: italic;
  }

  /* Pig */
  .aContCO2 {
    position: relative;
    width: 200px;
    height: 200px;
    top: 280px;
    left: 20px;
    z-index: 1;
  }

  /* Weapons */
  .wContCO2 {
    position: relative;
    width: 220px;
    height: 220px;
    top: 0px;
    left: 100px;
    filter: blur(4px);
    z-index: -1;
  }
  .wContCO2Half {
    position: relative;
    width: 300px;
    height: 300px;
    top: 100px;
    left: 50px;
  }

  /* Other */

  /* Info tiles */
  .tipCont {
    position: relative;
    width: 320px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 8px;
    padding: 1rem;
    background-color: #c5fac5;
    box-shadow: -3px 0px 0px 0px green;

    h3 {
      margin: 0;
      color: green;
      font-size: 32px;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      font-size: 16px;
    }
  }
  .didCont {
    position: relative;
    width: 320px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 8px;
    padding: 1rem;
    background-color: aliceblue;
    box-shadow: -3px 0px 0px 0px blue;

    h3 {
      margin: 0;
      color: blue;
      font-size: 32px;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      font-size: 16px;
    }
  }
  .ttCont {
    position: relative;
    width: 320px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 8px;
    padding: 1rem;
    background-color: mistyrose;
    box-shadow: -3px 0px 0px 0px red;

    h3 {
      margin: 0;
      color: red;
      font-size: 32px;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      font-size: 16px;
    }
  }
`

// Defining constants
const Hoverwrap = styled.div`
  animation-name: ${glowAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  width: 0px;

  &:hover {
    animation-play-state: paused;
  }
`

// Wrappers for info containers
const TipCont = styled.div`
  position: relative;  
`
const DidCont = styled.div`
  position: relative;
`
const TtCont = styled.div`
  position: relative;
`

// Wrappers for pig + weapons
const WrapCO2page0 = styled.div`
  position: relative;
  top: -160px;
`
//vercel test





//
// Page content starts below
//
export default function PigIndex() {

  const r = useRouter();
  let w = getWeapon();
  let { page } = r.query;
  console.log("page",page);
  // Sounds
  const [pig] = useSound("/sounds/pig.mp3");
  const [toc] = useSound("/sounds/toc.mp3");
  const [blowdart] = useSound("/sounds/blowdart.mp3");
  const [gas] = useSound("/sounds/gas.mp3");
  const [electricity] = useSound("/sounds/electricity.mp3");
  const [reload] = useSound("/sounds/reload.mp3");
  const [wet] = useSound("/sounds/wet.mp3");

  if (page === undefined) {
    page = 0;
  } 
  
  console.log("page");
  if (page === 0) { // Page 0 //
    if (w === "CO2") {
      return <div>
        <Container>
          <Nav />
          <TipCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
            onLoad: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 3
              }
            }
          }}>
            <p>Tap glowing red objects to interact with them!</p>
          </TipCont>
          <WrapCO2page0>
          <Hoverwrap>
            <div className="aContCO2 hover" onClick={
              () => {
                toc("/sounds.toc.mp3");
                {pig("/sounds/PigIndex.mp3")};
                r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })
              }}>
              <Image src={pico2[0].pig} layout="fill" objectFit='contain' />
            </div>
          </Hoverwrap>
          <div className="wContCO2">
            <Image src={coco2[0].weapon} layout="fill" objectFit='contain' />
          </div>
          </WrapCO2page0>
        </Container>
      </div>
    } else if (w === "Gun") {
      return <div>
        <Container>
          <Nav />
          <h1>Gun</h1>
        </Container>
      </div>
    } else if (w === "Tongs") {
      return <div>
        <Container>
          <Nav />
          <h1>Tongs</h1>
        </Container>
      </div>
    } else {
      return <div>
        <Container>
          <Nav />
          <h1>😂😂😂 u broke it moron PIG ERROR</h1>
        </Container>
      </div>
    }
  } else if (page === "1") { // Page 1 //
    if (w === "CO2") {
      return <div>
        <Container>
          <Nav />
          <Hoverwrap>
            <div className="wContCO2Half hover" onClick={
              () => {
                { gas("/sounds/gas.mp3") };
                r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })
              }}>
              <Image src={pico2[0].half} layout="fill" objectFit='contain' />
            </div>
          </Hoverwrap>
        </Container>
      </div>
    } else if (w === "Gun") {
      return <div>
        <Container>
          <Nav />
          <h1>Gun Page 1</h1>
        </Container>
      </div>
    } else {
      return <div>
        <Container>
          <Nav />
          <h1>Tongs Page 1</h1>
        </Container>
      </div>
    }
  }
}