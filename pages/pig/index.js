// Premade components
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSound from 'use-sound';

// My components
import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav";

// Data
import { chba, chco2, chto, ch, cogun, coco2, coto, pico2, electric, pigun, pito, pipi2 } from '../../data/selection';
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
  /* outline: 2px red solid; */
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

  .piDefault {
    position: relative;
    width: 300px;
    height: 300px;
    top: 120px;
    left: 50px;
    filter: blur(4px);
  }

  .coDefault2 {
    position: relative;
    width: 300px;
    height: 300px;
    top: 120px;
    left: 50px;
  }

  .piDefaultTong {
    position: relative;
    width: 250px;
    height: 250px;
    top: 150px;
    left: 70px;
  }
  .piTong2 {
    position: relative;
    width: 300px;
    height: 280px;
    top: 280px;
    left: 10px;
  }

  .tongsCont {
    position: relative;
    width: 300px;
    height: 300px;
    left: 125px;
    top: 0px;
  }

  .tongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    left: 130px;
    top: -180px;
  }

  .piTong2 {
    position: relative;
    width: 280px;
    height: 280px;
    top: 280px;
    left: 10px;
  }

  .piStun {
    position: relative;
    width: 340px;
    height: 340px;
    top: 240px;
    left: 30px;
    z-index: -1;
  }

  .piStun {
    position: relative;
    width: 340px;
    height: 340px;
    top: 240px;
    left: 30px;
    z-index: -1;
  }

  .piDecap {
    position: relative;
    width: 340px;
    height: 340px;
    top: 30px;
    left: 30px;
    z-index: -1;
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
    width: 260px;
    height: 260px;
    top: 20px;
    left: 50px;
  }
  .wContCO2Inside {
    position: relative;
    width: 250px;
    height: 250px;
    top: 10px;
    left: 50px;
  }

  .gun {
    position: relative;
    width: 200px;
    height: 200px;
    top: -100px;
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
    top: -470px;
    left: 235px;
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

  .knife1 {
    position: relative;
    width: 150px;
    height: 150px;
    left: 120px;
    top: -200px;
    transform: rotate(90deg);
  }

  .knife2 {
    position: relative;
    width: 150px;
    height: 150px;
    left: 40px;
    top: 5px;
    transform: scaleX(-1) rotate(50deg);
  }

  .blood {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    left: 100px;
    top: -80px;
    background-color: darkred;
    animation-name: ${bloodGush};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .blood2 {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    left: 105px;
    top: -80px;
    background-color: red;
    animation-name: ${bloodGush};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
  .blood3 {
    width: 18px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    left: 100px;
    top: -80px;
    background-color: darkred;
    animation-name: ${bloodGush2};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
  .blood4 {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    left: 95px;
    top: -90px;
    background-color: red;
  }
  .bloodWrap {
    animation-name: ${bloodGushY};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .cleaverBefore {
    position: relative;
    width: 180px;
    height: 180px;
    top: -320px;
    left: 160px;
  }
  .cleaver {
    position: relative;
    width: 180px;
    height: 180px;
    top: -400px;
    left: 160px;
  }
  .piBody {
    position: relative;
    width: 280px;
    height: 280px;
    top: 60px;
    left: 100px;
  }
  .piHead {
    position: relative;
    width: 130px;
    height: 130px;
    top: -180px;
    left: 30px;
  }
  .coDisembowel {
    position: relative;
    width: 380px;
    height: 380px;
    top: 60px;
    left: 6px;
  }

  .intestines {
    position: relative;
    width: 100px;
    height: 100px;
    left: 150px;
    top: -180px;
    cursor-events: none;
  }
  .kidneys {
    position: relative;
    width: 50px;
    height: 50px;
    left: 180px;
    top: -300px;
    cursor-events: none;
  }
  .lungs {
    position: relative;
    width: 80px;
    height: 80px;
    left: 160px;
    top: -350px;
    cursor-events: none;
  }
  .heart {
    position: relative;
    width: 50px;
    height: 50px;
    top: -460px;
    left: 200px;
    cursor-events: none;
  }
  .liver {
    position: relative;
    width: 80px;
    height: 80px;
    left: 140px;
    top: -480px;
    cursor-events: none;
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

const Co2cont = styled.div`
  position: relative;
  animation-name: ${shakeAnimation};
  animation-duration: 0.82s;
  animation-iteration-count: infinite;
`

const WrapGunpage0 = styled.div`
  position: relative;
  width: 0;
  top: -110px;
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
const WrapGunPage1 = styled.div`
  position: relative;
  width: 0;
  top: -110px;
`
const WrapKnifepage3 = styled.div`
  position: relative;
  width: 0;
  top: -80px;
`
const WrapTongpage0 = styled.div`
  position: relative;
  width: 0;
  top: -100px;
`
const WrapTongpage1 = styled.div`
  position: relative;
  width: 0;
  top: -180px;
`
const WrapTongpage2 = styled.div`
  position: relative;
  width: 0;
  top: -220px;
`
const Knifecont = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`
const Knifecont2 = styled.div`
  animation-name: ${cutAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: relative;
  z-index: -1;
`
const WrapKnifepage4 = styled.div`
  position: relative;
  width: 0;
  top: -230px;
`
const Cleaver = styled.div`
  animation-name: ${cleaverAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  position: relative;
`
const Head = styled.div`
  animation-name: ${headAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
`
const Intestines = styled.div`
  animation-name: ${intestineAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
`
const Kidneys = styled.div`
  animation-name: ${kidneyAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
`
const Lungs = styled.div`
  animation-name: ${lungsAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;
`
const Heart = styled.div`
  animation-name: ${heartAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
  animation-delay: 0.6s;
`
const Liver = styled.div`
  animation-name: ${liverAnimation};
  animation-duration: 2.0s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
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




//
// Page content starts below
//
export default function PigIndex() {

  const r = useRouter();
  let w = getWeapon();
  let { page } = r.query;

  // Sounds
  const [pig] = useSound("/sounds/pig.mp3");
  const [toc] = useSound("/sounds/toc.mp3");
  const [blowdart] = useSound("/sounds/blowdart.mp3");
  const [gas] = useSound("/sounds/gas.mp3");
  const [electricity] = useSound("/sounds/electricity.mp3");
  const [reload] = useSound("/sounds/reload.mp3");
  const [wet] = useSound("/sounds/wet.mp3");
  const [knife] = useSound("/sounds/knife.mp3")
  const [sharp] = useSound("/sounds/sharp.mp3")

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
              <Image src={pico2[0].pig} layout="fill" objectFit='contain' alt=""/>
            </div>
          </Hoverwrap>
          <div className="wContCO2">
            <Image src={coco2[0].weapon} layout="fill" objectFit='contain' alt=""/>
          </div>
          </WrapCO2page0>
        </Container>
      </div>
    } else if (w === "Gun") {
      return  <div>
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
        <WrapGunpage0>
        <div className="piDefault">
          <Image src={pigun[0].animal} layout="fill" objectFit='contain' alt=""/>
        </div>
        <Hoverwrap>
        <div className="gun hover" onClick={
          () => {
            {reload("/sounds/reload.mp3")};
            { toc("/sounds/toc.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={pigun[0].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
        </Hoverwrap>
        </WrapGunpage0>
      </Container>
    </div>
    } else if (w === "Tongs") {
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
        <WrapTongpage0>
        <div className="piDefaultTong blur">
          <Image src={pigun[0].animal} layout="fill" objectFit='contain' alt=""/>
        </div>
        <Hoverwrap>
        <div className="tongsCont hover" onClick={
          () => {
            { electricity("/sounds/electricity.mp3") };
            { pig("/sounds/pig.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={chto[0].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
        </Hoverwrap>
        </WrapTongpage0>
      </Container>
    </div>
    } else {
      return <div>
        <Container>
          <Nav />
          <h1>😂😂😂 u broke it PIG ERROR</h1>
        </Container>
      </div>
    }
  } else if (page === "1") { // Page 1 //
    if (w === "CO2") {
      return <div>
        <Container>
          <Nav />
          <DidCont as={motion.div} className="didCont" initial="onLoad" animate="visible" variants={{
            onLoad: {
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.4
              }
            }
          }}>
            <h3>Did you know?</h3>
              <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>

          </DidCont>
          <Hoverwrap>
            <div className="wContCO2Half hover" onClick={
              () => {
                { gas("/sounds/gas.mp3") };
                {pig("/sounds/pig.mp3")};
                r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })
              }}>
              <Image src={pico2[0].half} layout="fill" objectFit='contain' alt=""/>
            </div>
          </Hoverwrap>
        </Container>
      </div>
    } else if (w === "Gun") {
      return <div>
      <Container>
      
        <Nav />
        <DidCont as={motion.div} className="didCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.4
            }
          }
        }}>
          <h3>Did you know?</h3>
          <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>
        </DidCont>
        <WrapGunPage1>
        <div className="coDefault2">
          <Image src={pigun[0].animal} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className="gunDefault">
          <Image src={cogun[1].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
        <Hoverwrap>
        <div className="circle" onClick={
          () => {
            { blowdart("/sounds/blowdart.mp3") };
            { pig("/sounds/pig.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}></div>
        </Hoverwrap>
        </WrapGunPage1>
      </Container>
    </div>
    } else {
      return <div>
      <Container>
      
        <Nav />
        <DidCont as={motion.div} className="didCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.4
            }
          }
        }}>
          <h3>Did you know?</h3>
            <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>
        </DidCont>
        <WrapTongpage1>
        <div className="piTong2">
          <Image src={pito[0].skeleton} layout="fill" objectFit='contain' alt=""/>
        </div>
        <Hoverwrap>
        <div className="tongsCont2 hover" onClick={
          () => {
            { toc("/sounds/toc.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={chto[1].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
        </Hoverwrap>
        <Electricity className='elec1'>
          <Image src={electric[0].bolt} layout="fill" objectFit='contain' alt=""/>
        </Electricity>
        <Electricity2 className='elec2'>
          <Image src={electric[1].bolt} layout="fill" objectFit='contain' alt=""/>
        </Electricity2>
        <Electricity3 className='elec3'>
          <Image src={electric[2].bolt} layout="fill" objectFit='contain' alt=""/>
        </Electricity3>
        </WrapTongpage1>
      </Container>
    </div>
    }
  } else if (page === "2") { // Page 2 //
      if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
              <div className="didCont" >
              <h3>Did you know?</h3>
                <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>
              </div>
            <Co2cont>
              <div className="wContCO2Inside" onClick={
                () => r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })}>
                <Image src={pico2[0].inside} layout="fill" objectFit='contain' alt=""/>
              </div>
            </Co2cont>
          </Container>
          <Continue />
        </div>
      }
      else if (w === "Gun") {
        return <div>
          <Container>

            <Nav />
            <div className="didCont">
              <h3>Did you know?</h3>
              <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>
            </div>
            <WrapGunPage1>
            <div className="coDefault2">
              <Image src={pigun[1].shot} layout="fill" objectFit='contain' alt=""/>
            </div>
            </WrapGunPage1>
          </Container>
          <Continue />
        </div>
      } else {
        return <div>
          <Container>
          
            <Nav />
            <div className="didCont">
              <h3>Did you know?</h3>
                <p>The scientific name for a pig is <span className="italic">Sus domesticus.</span></p>
            </div>
            <WrapTongpage2>
            <div className="piStun">
              <Image src={pigun[1].animal} layout="fill" objectFit='contain' alt=""/>
            </div>
            </WrapTongpage2>
          </Container>
          <Continue />
        </div>
      }
  } else if (r.asPath === "/pig?page=3") { // PAGE 3 //
    return <div>
      <Container>
      
        <Nav />
        <WrapKnifepage3>
        <div className="piStun">
          <Image src={pito[0].animal} layout="fill" objectFit='contain' alt=""/>
        </div>
        <Hoverwrap>
        <Knifecont>
          <div className="knife1 hover" onClick={
            () => {
              { toc("/sounds/toc.mp3") };
              { knife("/sounds/knife.mp3")};
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={ch[0].weapon} layout="fill" objectFit='contain' alt=""/>
          </div>
        </Knifecont>
        </Hoverwrap>
        </WrapKnifepage3>
      </Container>
    </div>
} else if (r.asPath === "/pig?page=4") { // Page 4 //
  return <div>
      <Container>
      
      <Nav />
      <DidCont as={motion.div} className="didCont" initial="onLoad" animate="visible" variants={{
        onLoad: {
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4
          }
        }
      }}>
        <h3>Did you know?</h3>
        <p>Due to a lack of sweat glands, pigs wallow in mud to <a href="https://en.wikipedia.org/wiki/Pig#Behavior" target="_blank" rel="noreferrer">control their body temperature. </a></p>
      </DidCont>
      <WrapKnifepage4>
      <div className="piStun">
        <Image src={pito[1].animal} layout="fill" objectFit="contain" alt=""/>
      </div>
      <Knifecont2>
        <div className="knife2">
          <Image src={ch[1].weapon} layout="fill" objectFit="contain" alt=""/>
        </div>
      </Knifecont2>
      <div className="bloodWrap">
        <div className="blood"></div>
        <div className="blood2"></div>
        <div className="blood3"></div>
        <div className="blood4"></div>
      </div>
    </WrapKnifepage4>
    </Container>
    <Continue />
  </div> 
} else if (r.asPath === "/pig?page=5") { // Page 5 Decapitate //
  return <div>
    <Container>
    
      <Nav />
      <TtCont as={motion.div} className="ttCont" initial="onLoad" animate="visible" variants={{
        onLoad: {
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4
          }
        }
      }}>
        <h3>Terrible truths</h3>
        <p>A labour shortage in the UK means <a href="https://news.sky.com/story/the-soul-destroying-impact-of-the-pig-crisis-and-why-its-happening-12479145" target="blank" rel="noreferrer">thousands of healthy pigs are being culled</a> due to overcrowding.</p>
      </TtCont>
      <div className="piDecap">
        <Image src={pito[1].animal} layout="fill" objectFit="contain" alt=""/>
      </div>
      <Hoverwrap>
        <div className="cleaverBefore hover" onClick={
          () => {
            {sharp("sounds/sharp.mp3")};
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[2].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Hoverwrap>
    </Container>
  </div>
} else if (r.asPath === "/pig?page=6") { // Page 6 //
  return <div>
    <Container>
    
      <Nav />
      <div className="ttCont">
        <h3>Terrible truths</h3>
        <p>A labour shortage in the UK means <a href="https://news.sky.com/story/the-soul-destroying-impact-of-the-pig-crisis-and-why-its-happening-12479145" target="blank" rel="noreferrer">thousands of healthy pigs are being culled</a> due to overcrowding.</p>
      </div>
      <div className="piBody">
        <Image src={pipi2[0].body} layout="fill" objectFit="contain" alt=""/>
      </div>
      <Head>
      <div className="piHead">
        <Image src={pipi2[0].head} layout="fill" objectFit="contain" alt=""/>
      </div>
      </Head>
      <Cleaver>
        <div className="cleaver">
        <Image src={ch[2].weapon} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Cleaver>
    </Container>
    <Continue />
  </div>
} else if (r.asPath === "/pig?page=7") { // Page 7: Disembowel //
  return <div>
    <Container>
    
      <Nav />
      <Hoverwrap>
        <div className="coDisembowel hover" onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={pipi2[0].disembowel} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className='intestines' onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[4].intestines} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className='kidneys' onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[4].kidneys} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className='lungs' onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[4].lungs} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className='heart' onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[4].heart} layout="fill" objectFit='contain' alt=""/>
        </div>
        <div className='liver' onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
              query: {
                page: Number(page) + 1
              }
            })
          }}>
          <Image src={ch[4].liver} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Hoverwrap>
    </Container>
  </div>
} else if (r.asPath === "/pig?page=8") { // Page 8 //
  return <div>
    <Container>
    
      <Nav />
      <div className="coDisembowel">
        <Image src={pipi2[0].disembowel} layout="fill" objectFit='contain' alt=""/>
      </div>
      <Intestines>
        <div className='intestines'>
          <Image src={ch[4].intestines} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Intestines>
      <Kidneys>
        <div className='kidneys'>
          <Image src={ch[4].kidneys} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Kidneys>
      <Lungs>
        <div className='lungs'>
          <Image src={ch[4].lungs} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Lungs>
      <Heart>
        <div className='heart'>
          <Image src={ch[4].heart} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Heart>
      <Liver>
        <div className='liver'>
          <Image src={ch[4].liver} layout="fill" objectFit='contain' alt=""/>
        </div>
      </Liver>
    </Container>
    <Continue />
  </div>
}
  
}