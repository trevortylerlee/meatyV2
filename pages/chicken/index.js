import Image from 'next/image';
import { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSound from 'use-sound';

import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"

// Import data
import { chba, chco2, chto, ch, feathers, electric } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Import animations
import { bathAnimation, bathAnimation2 } from '../../data/animation';
import { breatheAnimation } from '../../data/animation';
import { cutAnimation } from '../../data/animation';
import { shakeAnimation } from '../../data/animation';
import { bloodGush, bloodGush2 } from '../../data/animation';
import { bloodGushY } from '../../data/animation';
import { featherFly, featherFly2, featherFly3, featherFly4 } from '../../data/animation';
import { cleaverAnimation, headAnimation } from '../../data/animation';
import { intestineAnimation, kidneyAnimation, lungsAnimation, heartAnimation, liverAnimation } from '../../data/animation';
import { electricAnimation } from '../../data/animation';
import { glowAnimation } from '../../data/animation';
import Back from '../../comps/Back';

// Styled components start here

const Container = styled.div`
  width: 400px;
  height: 80vh;
  margin: 0 auto;
  /* outline: 2px red solid; */
  overflow: hidden;
  padding-bottom: 0rem;
  margin-top: 1rem;
  
  .aCont {
    position: relative;
    width: 120px;
    height: 120px;
    place-content: center;
    top: 220px;
    left: 40px;
  }
  .chTongsCont {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 180px;
    left: 120px;
    filter: blur(4px);
  }
  .chTongsCont2 {
    position: relative;
    width: 200px;
    height: 200px;
    place-content: center;
    top: 190px;
    left: 120px;
  }
  .chTongsCont3 {
    position: relative;
    width: 200px;
    height: 200px;
    place-content: center;
    top: 140px;
    left: 120px;
  }
  .chBathCont {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 154px;
    left: 100px;
    transform: rotate(180deg);
  }
  .chBathCont2 {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 154px;
    left: 100px;
    transform: rotate(180deg);
  }
  .chBathCont3 {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 274px;
    left: 100px;
    transform: rotate(180deg);
  }

  .wContBefore {
    position: relative;
    width: 200px;
    height: 200px;
    left: 100px;
    top: 0px;
    filter: blur(4px);
  }
  .wCont {
    position: relative;
    width: 200px;
    height: 200px;
    left: 100px;
    top: -80px;
    z-index: 2;
  }
  .tongsCont {
    position: relative;
    width: 300px;
    height: 300px;
    left: 125px;
    top: -80px;
  }
  .tongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    left: 110px;
    top: -250px;
  }
  .bathCont {
    position: relative;
    width: 390px;
    height: 390px;
    left: 5px;
    top: -40px;
    opacity: 85%;
    pointer-events: none;
  }


  .hover:hover {
    filter: drop-shadow(4px 4px 20px lime);
    cursor: pointer;
  }


  /* OK EVERYTHING BELOW STARTS FROM PAGE 3 */
  /* OK EVERYTHING BELOW STARTS FROM PAGE 3 */
  /* OK EVERYTHING BELOW STARTS FROM PAGE 3 */


  .chPage3 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 280px;
    left: 40px;
    transform: rotate(90deg);
    z-index: -2;
  }
  .chPage4 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 200px;
    left: 40px;
    transform: rotate(90deg);
    z-index: -2;
  }
  .chPage6 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 100px;
    left: 40px;
    transform: rotate(180deg);
  }

  .knife1 {
    position: relative;
    width: 150px;
    height: 150px;
    left: 120px;
    top: -160px;
    transform: rotate(90deg);
  }
  .knife2 {
    position: relative;
    width: 150px;
    height: 150px;
    left: 160px;
    top: -120px;
    transform: scaleX(-1) rotate(60deg);
    cursor-events: none;
  }

  .blood {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    left: 240px;
    top: 80px;
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
    left: 240px;
    top: 80px;
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
    left: 240px;
    top: 80px;
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
    left: 245px;
    top: 50px;
    background-color: red;
  }

  .bloodWrap {
    animation-name: ${bloodGushY};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .feather {
    position: relative;
    width: 150px;
    height: 150px;
    top: -130px;
    left: 100px;
  }
  .feather2 {
    position: relative;
    width: 150px;
    height: 150px;
    top: -130px;
    left: 100px;
  }

  .chDecap {
    position: relative;
    width: 300px;
    height: 300px;
    top: 180px;
    left: 60px;
    transform: rotate(-90deg);
  }
  .chDecapBody {
    position: relative;
    width: 230px;
    height: 230px;
    top: 240px;
    left: 130px;
    transform: rotate(-90deg);
  }
  .chDecapHead {
    position: relative;
    width: 112px;
    height: 112px;
    top: 52px;
    left: 50px;
    transform: rotate(-90deg);
  }

  .cleaverBefore {
    position: relative;
    width: 180px;
    height: 180px;
    top: -200px;
    left: 160px;
  }
  .cleaver {
    position: relative;
    width: 180px;
    height: 180px;
    top: -220px;
    left: 160px;
  }

  .chDisembowel {
    position: relative;
    width: 300px;
    height: 300px;
    top: 200px;
    left: 48px;
  }

  .intestines {
    position: relative;
    width: 100px;
    height: 100px;
    left: 150px;
    top: 40px;
  }
  .kidneys {
    position: relative;
    width: 50px;
    height: 50px;
    left: 180px;
  }
  .lungs {
    position: relative;
    width: 80px;
    height: 80px;
    left: 160px;
    top: -90px;
  }
  .heart {
    position: relative;
    width: 50px;
    height: 50px;
    top: -200px;
    left: 200px;
  }
  .liver {
    position: relative;
    width: 80px;
    height: 80px;
    left: 140px;
    top: -220px;
  }

  .elec1 {
    position: relative;
    width: 100px;
    height: 100px;
    top: -280px;
    left: 110px;
  }
  .elec2 {
    position: relative;
    width: 60px;
    height: 60px;
    top: -300px;
    left: 220px;
  }
  .elec3 {
    position: relative;
    width: 80px;
    height: 80px;
    top: -350px;
    left: 140px;
  }

/* INFO TILES */
  .infoCont {
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

`
const BgCont = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: red;
  background-image: url("/misc/barn.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

// ANIMATIONS

const Chickenbath = styled.div`
  animation-name: ${bathAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`
const Chickenbath2 = styled.div`
  animation-name: ${bathAnimation2};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  cursor-events: none;
  z-index: -1;
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
const Co2cont = styled.div`
  animation-name: ${shakeAnimation};
  animation-duration: 0.82s;
  animation-iteration-count: infinite;
`

const Feather1 = styled.div`
  animation-name: ${featherFly};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
`
const Feather2 = styled.div`
  animation-name: ${featherFly2};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`
const Feather3 = styled.div`
  animation-name: ${featherFly3};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
`
const Feather4 = styled.div`
  animation-name: ${featherFly4};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
`

const Cleaver = styled.div`
  animation-name: ${cleaverAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
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
  pointer-events: none;
`
const Electricity2 = styled.div`
  animation-name: ${electricAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  pointer-events: none;
`
const Electricity3 = styled.div`
  animation-name: ${electricAnimation};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  pointer-events: none;
`

const Hoverwrap = styled.div`
  width: 0px;
  animation-name: ${glowAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  cursor-events: none;

  &:hover {
    animation-play-state: paused;
  }
`

// Info popup wrappers
const Info = styled.div` /* Page 0 */
  position: relative;
`
const Info2 = styled.div` /* Page 2 */
  position: relative;
`
const Info3 = styled.div` /* Page 4 */
  position: relative;
`
const Info4 = styled.div` /* Page 10 */
  position: relative;
`
const Info5 = styled.div` 
  position: relative;
`



// Wrappers
// Wrappers surround the interactive elements.
//
const Wrapper = styled.div`
  position: relative;
  top: -100px;
  width: 0;
`
const Wrapper2 = styled.div`
  position: relative;
  top: px;
  width: 0;
`
const Wrapper3 = styled.div` /* Page 3 */
  position: relative;
  top: -120px;
  width: 0px;
`
const Wrapper4 = styled.div` /* Page 5 */
  position: relative;
`
const WrapperDecap = styled.div` /* Page 10 */
  position: relative;
  top: -100px;
`
const Wrapper5 = styled.div`
  position: relative;
  top: -160px;
  width: 0;
`
const Wrapper7 = styled.div`
  position: relative;
  width: 0;
`
const WrapperDisem = styled.div`
  position: relative;
  width: 0;
  top: -60px;
`
const Wrapperidk = styled.div`
  position: relative;
  width: 0;
  top: -60px;
`
const Wrapper6 = styled.div`
  position: relative;
  width: 0;
  top: -80px;
`
const WrapperTong = styled.div`
  position: relative;
  width: 0;
  top: -40px;
`


// PAGE CONTENT STARTS HERE //
export default function ChickenIndex() {

  const r = useRouter();
  let w = getWeapon();
  let {page} = r.query;

  // Sounds
  const [chicken] = useSound("/sounds/chicken.mp3");
  const [toc] = useSound("/sounds/toc.mp3");
  const [splash] = useSound("/sounds/splash.mp3");
  const [gas] = useSound("/sounds/gas.mp3");
  const [electricity] = useSound("/sounds/electricity.mp3");
  const [wet] = useSound("/sounds/wet.mp3");
  const [sharp] = useSound("/sounds/sharp.mp3");
  const [knife] = useSound("/sounds/knife.mp3");

  if (page === undefined) {
    page = 0;
  } 
  
  if (page === 0) { // PAGE 0 //
    if (w === "Bath") {
      return <div>
        <Container>        
          <Nav />
          <Info as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
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
          </Info>
          <motion.div initial="onLoad" animate="visible" variants={{
            onLoad: {
              scale: .4,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1
            }
          }}>
          <Wrapper>
          <Hoverwrap>
          <div className="chBathCont hover" onClick={
            () => {
              {toc("/sounds/toc.mp3")};
              { electricity("/sounds/electricity.mp3") };
              {chicken("/sounds/chicken.mp3")};
              {splash("/sounds/splash.mp3")};
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
          </div>
          </Hoverwrap>
          <div className="bathCont">
            <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
          </div>
          </Wrapper>
          </motion.div>
        </Container>
      </div>
    } else if (w === "CO2") {
        return <div>
          <Container>
          
            <Nav />
            <Info as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
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
            </Info>
              <Wrapper6 as={motion.div} initial="onLoad" animate="visible" variants={{
                onLoad: {
                  scale: .4,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1
                }
              }}>
            <Hoverwrap>
            <div className="aCont hover" onClick={
              () => {
                { chicken("/sounds/chicken.mp3")};
                {toc ("/sounds/toc.mp3")};
                r.push({
                query: {
                  page: Number(page) + 1
                }
            })}}>
            <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            
            </Hoverwrap>
            <div className="wContBefore">
              <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
            </div>
            </Wrapper6>
          </Container>
        </div>
    } else if (w === "Tongs") {
        return <div>
          <Container>
          <Nav />
            <Info as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
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
            </Info>
            <Wrapper7 as={motion.div} initial="onLoad" animate="visible" variants={{
              onLoad: {
                scale: .4,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1
              }
            }}>
            <div className="chTongsCont">
              <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            <Hoverwrap>
            <div className="tongsCont hover" onClick={
              () => {
                { chicken("/sounds/chicken.mp3") };
                { electricity("/sounds/electricity.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}>
              <Image src={chto[0].weapon} layout="fill" objectFit='contain' />
            </div>
            </Hoverwrap>
            </Wrapper7>
          </Container>
        </div>
    } else {
        return <div>
          <Container>
          <Nav />
            <h1>😂😂😂 u broke it moron CHICKEN ERROR</h1>
          </Container>
          </div>
      }
  } else if (r.asPath === "/chicken?page=1") { // PAGE 1 //
      if (w === "Bath") {
        return <div>
          <Container>
          
          <Nav />
            <Wrapper2>
            <Chickenbath>
            <Hoverwrap>
            <div className='chBathCont2 hover' onClick={
              () => {
                {toc("/sounds/toc.mp3")};
                r.push({
                query: {
                  page: Number(page) + 1
                }
              })}}>
              <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            </Hoverwrap>
            </Chickenbath>
            <div className="bathCont">
              <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
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
            </Wrapper2>
          </Container>
        </div>
      } else if (w === "CO2") {
          return <div>
            <Container>
            
              <Nav />
              <Info2 as={motion.div} className="infoCont" initial="onLoad" animate="visible" variants={{
                onLoad: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.4
                  }
                }
              }}>
                <h3>Did you know?</h3>
                <p>Chickens have excellent memories.</p>
              </Info2>
              <div className="aCont">
              </div>
              <Hoverwrap>
              <div className="wCont hover" onClick={
                () => {
                  { toc("/sounds/toc.mp3") };
                  {gas("/sounds/gas.mp3")};
                  r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })}}>
                <Image src={chco2[1].weapon} layout="fill" objectFit='contain' />
              </div>
              </Hoverwrap>
            </Container>
          </div>
        } else {
            return <div>
              <Container>
              
                <Nav />
                <Info2 as={motion.div} className="infoCont" initial="onLoad" animate="visible" variants={{
                  onLoad: {
                    opacity: 0
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.4
                    }
                  }
                }}>
                  <h3>Did you know?</h3>
                  <p>Chickens have excellent memories.</p>
                </Info2>
                <WrapperTong>
                <div className="chTongsCont2">
                  <Image src={chto[0].skeleton} layout="fill" objectFit='contain' />
                </div>
                <div className="tongsCont2 hover" onClick={
                  () => {
                    {toc("/sounds/toc.mp3")}
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
                </WrapperTong>
              </Container>
            </div>
        }
    } else if (r.asPath === "/chicken?page=2") { // PAGE 2 //
        if (w === "Bath") {
          return <div>
            <Container>
            
              <Nav />
              <Info2 as={motion.div} className="infoCont" initial="onLoad" animate="visible" variants={{
                onLoad: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.4
                  }
                }
              }}>
                <h3>Did you know?</h3>
                <p>Chickens have excellent memories.</p>
              </Info2>
              <Wrapper3>
              <Chickenbath2>
              <div className='chBathCont3'>
                <Image src={chto[1].animal} layout="fill" objectFit='contain' />
              </div>
              </Chickenbath2>
              <div className="bathCont">
                <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
              </div>
              </Wrapper3>
            </Container>
            
            <Continue />
          </div>
        } else if (w === "CO2") {
          return <div>
            <Container>
            
              <Nav />
              <div className="infoCont">
                <h3>Did you know?</h3>
                <p>Chickens have excellent memories.</p>
              </div>
              <div className="aCont">
              </div>
              <Co2cont className="wCont">
                <Image src={chco2[2].weapon} layout="fill" objectFit='contain' />
              </Co2cont>
            </Container>
            <Continue />
          </div>
        } else {
            return <div>
              <Container>
              
                <Nav />
                <div className="infoCont">
                  <h3>Did you know?</h3>
                  <p>Chickens have excellent memories.</p>
                </div>
                <div className="chTongsCont3">
                  <Image src={chto[1].animal} layout="fill" objectFit='contain' />
                </div>
              </Container>
              <Continue />
            </div>
        }
    } else if (r.asPath === "/chicken?page=3") { // PAGE 3 //
       return <div>
        <Container>
        
          <Nav />
           <Wrapperidk as={motion.div} initial="onLoad" animate="visible" variants={{
             onLoad: {
               scale: .4,
               opacity: 0
             },
             visible: {
               scale: 1,
               opacity: 1
             }
           }}>
          <div className="chPage3">
             <Image src={ch[0].animal} layout="fill" objectFit='contain' />
          </div>
          <Hoverwrap>
          <Knifecont>
          <div className="knife1 hover" onClick={
            () => {
              {toc("sounds/toc.mp3")};
              {knife("sounds/knife.mp3")};
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
             <Image src={ch[0].weapon} layout="fill" objectFit='contain' />
          </div>
          </Knifecont>
          </Hoverwrap>
          </Wrapperidk>
        </Container>
       </div>
    } else if (r.asPath === "/chicken?page=4") { // Page 4 //
        return <div>
          <Container>
          
            <Nav />
            <Info3 as={motion.div} className="infoCont" initial="onLoad" animate="visible" variants={{
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
              <p>Chickens are placed in "kill cones" to prevent bruising and trauma.</p>
            </Info3>
            <Wrapper5>
            <div className="chPage4">
              <Image src={ch[1].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="bloodWrap">
            <div className="blood"></div>
            <div className="blood2"></div>
            <div className="blood3"></div>
            <div className="blood4"></div>
            </div>
            <Knifecont2>
            <div className="knife2">
              <Image src={ch[1].weapon} layout="fill" objectFit='contain' />
            </div>
            </Knifecont2>
            </Wrapper5>
          </Container>
          <Continue />
        </div>
    } else if (r.asPath === "/chicken?page=5") { // Page 5 //
        return <div>
          <Container>
          
            <Nav />
            <Hoverwrap>
              <Wrapper4 as={motion.div} initial="onLoad" animate="visible" variants={{
                onLoad: {
                  scale: .4,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1
                }
              }}>
            <div className="chPage6 hover" onClick={
              () => {
                { toc("sounds/toc.mp3") };
                r.push({
                query: {
                  page: Number(page) + 1
                }})}}>
              <Image src={feathers[0].chicken} layout="fill" objectFit='contain' />
            </div>
            </Wrapper4>
            </Hoverwrap>
          </Container>
        </div>
    } else if (r.asPath === "/chicken?page=6") { // Page 6 //
    return <div>
      <Container>
      
        <Nav />
        <Hoverwrap>
        <div className="chPage6 hover" onClick={
          () => {
            { toc("sounds/toc.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={feathers[1].chicken} layout="fill" objectFit='contain' />
        </div>
        </Hoverwrap>
        <Feather1>
        <div className="feather">
          <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
        </div>
        </Feather1>
      </Container>
    </div>
    } else if (r.asPath === "/chicken?page=7") { // Page 7 //
      return <div>
        <Container>
        
          <Nav />
          <Hoverwrap>
          <div className="chPage6 hover" onClick={
            () => {
              { toc("sounds/toc.mp3") };
              r.push({
              query: {
                page: Number(page) + 1
              }
            })}}>
            <Image src={feathers[2].chicken} layout="fill" objectFit='contain' />
          </div>
          </Hoverwrap>
          <Feather2>
            <div className="feather2">
              <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
            </div>
          </Feather2>
        </Container>
      </div>
  } else if (r.asPath === "/chicken?page=8") { // Page 8 //
    return <div>
      <Container>
      
        <Nav />
        <Hoverwrap>
        <div className="chPage6 hover" onClick={
          () => {
            { toc("sounds/toc.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={feathers[3].chicken} layout="fill" objectFit='contain' />
        </div>
        </Hoverwrap>
        <Feather3>
          <div className="feather2">
            <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
          </div>
        </Feather3>
      </Container>
    </div>
  } else if (r.asPath === "/chicken?page=9") { // Page 9 //
    return <div>
      <Container>
      
        <Nav />
        <div className="chPage6">
          <Image src={feathers[4].chicken} layout="fill" objectFit='contain' />
        </div>
        <Feather4>
          <div className="feather2">
            <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
          </div>
        </Feather4>
      </Container>
      <Continue />
    </div>
  } else if (r.asPath === "/chicken?page=10") { // Page 10: Decapitate
    return <div>
      <Container>
      
        <Nav />
          <Info4 as={motion.div} className="ttCont" initial="onLoad" animate="visible" variants={{
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
            <p>In 1945 a chicken named Mike <a href="https://en.wikipedia.org/wiki/Mike_the_Headless_Chicken" target="blank">survived decapitation for 18 months.</a></p>
          </Info4>
        <WrapperDecap as={motion.div} initial="onLoad" animate="visible" variants={{
             onLoad: {
               scale: .4,
               opacity: 0
             },
             visible: {
               scale: 1,
               opacity: 1
             }
           }}>
        <div className="chDecap">
          <Image src={ch[2].animal} layout="fill" objectFit='contain' />
        </div>
        <Hoverwrap>
        <div className="cleaverBefore hover" onClick={
          () => {
            { toc("sounds/toc.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={ch[2].weapon} layout="fill" objectFit='contain' />
        </div>
        </Hoverwrap>
        </WrapperDecap>
      </Container>
    </div>
  } else if (r.asPath === "/chicken?page=11") { // Page 11 //
    return <div>
      <Container onLoad={
        () => {
          { sharp("sounds/sharp.mp3") };
        }
      }>
        
        <Nav />
        <div className="ttCont">
          <h3>Terrible truths</h3>
          <p>In 1945 a chicken named Mike <a href="https://en.wikipedia.org/wiki/Mike_the_Headless_Chicken" target="blank">survived decapitation for 18 months.</a></p>
        </div>
        <WrapperDecap>
        <div className="chDecapBody">
          <Image src={ch[3].body} layout="fill" objectFit='contain' />
        </div>
        <Head>
        <div className="chDecapHead">
          <Image src={ch[3].head} layout="fill" objectFit='contain' />
        </div>
        </Head>
        <Cleaver>
        <div className="cleaver">
          <Image src={ch[2].weapon} layout="fill" objectFit='contain' />
        </div>
        </Cleaver>
        </WrapperDecap>
      </Container>
      <Continue />
    </div>
  } else if (r.asPath === "/chicken?page=12") { // Page 12 //
    return <div>
      <Container>
      
        <Nav />
        <Hoverwrap>
          <WrapperDisem as={motion.div} initial="onLoad" animate="visible" variants={{
            onLoad: {
              scale: .4,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1
            }
          }}>
        <div className="chDisembowel hover" onClick={
          () => {
            { wet("sounds/wet.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>
          <Image src={ch[4].disembowel} layout="fill" objectFit='contain' />
        </div>
        </WrapperDisem>
        </Hoverwrap>
      </Container>
    </div>
  } else if (r.asPath === "/chicken?page=13") { // Page 13 //
    return <div>
      <Container>
      
        <Nav />
        <WrapperDisem>
        <div className="chDisembowel">
          <Image src={ch[4].disemboweled} layout="fill" objectFit='contain' />
        </div>
        <Intestines>
        <div className='intestines'>
          <Image src={ch[4].intestines} layout="fill" objectFit='contain' />
        </div>
        </Intestines>
        <Kidneys>
        <div className='kidneys'>
          <Image src={ch[4].kidneys} layout="fill" objectFit='contain' />
        </div>
        </Kidneys>
        <Lungs>
        <div className='lungs'>
          <Image src={ch[4].lungs} layout="fill" objectFit='contain' />
        </div>
        </Lungs>
        <Heart>
        <div className='heart'>
          <Image src={ch[4].heart} layout="fill" objectFit='contain' />
        </div>
        </Heart>
        <Liver>
        <div className='liver'>
          <Image src={ch[4].liver} layout="fill" objectFit='contain' />
        </div>
        </Liver>
        </WrapperDisem>
      </Container>
      <Continue />
    </div>
  }
}