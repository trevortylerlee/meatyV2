import Image from 'next/image';
import { useRouter } from 'next/router';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

// Import data
import { chba, chco2, chto, ch, feathers } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Import animations
import { bathAnimation } from '../../data/animation';
import { breatheAnimation } from '../../data/animation';
import { cutAnimation } from '../../data/animation';
import { shakeAnimation } from '../../data/animation';
import { bloodGush, bloodGush2 } from '../../data/animation';
import { bloodGushY } from '../../data/animation';
import { featherFly, featherFly2, featherFly3, featherFly4 } from '../../data/animation';

// Styled components start here

const Container = styled.div`
  width: 400px;
  height: 90vh;
  margin: 0 auto;
  outline: 2px red solid;
  
  .aCont {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 250px;
    left: 100px;
    z-index: 9999;
  }
  .chTongsCont {
    position: relative;
    width: 250px;
    height: 250px;
    place-content: center;
    top: 150px;
    left: 50px;
  }
  .chTongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 200px;
    left: 85px;
  }
  .chBathCont {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 50px;
    left: 100px;
    transform: rotate(180deg);
  }
  .chBathCont2 {
    position: relative;
    width: 150px;
    height: 150px;
    place-content: center;
    top: 350px;
    left: 100px;
    transform: rotate(180deg);
  }

  .wCont {
    position: relative;
    width: 250px;
    height: 250px;
    left: 70px;
    top: -50px;
  }
  .tongsCont {
    position: relative;
    width: 300px;
    height: 300px;
    left: 125px;
    top: 40px;
  }
  .tongsCont2 {
    position: relative;
    width: 300px;
    height: 300px;
    left: 110px;
    top: -330px;
  }
  .bathCont {
    position: relative;
    width: 390px;
    height: 390px;
    left: 5px;
    top: 50px;
    opacity: 85%;
    pointer-events: none;
  }


  .hover:hover {
    filter: drop-shadow(4px 4px 8px red);
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
    top: 250px;
    left: 40px;
    transform: rotate(90deg);
  }
  .chPage6 {
    position: relative;
    width: 300px;
    height: 300px;
    place-content: center;
    top: 20px;
    left: 40px;
    transform: rotate(180deg);
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
    left: 160px;
    top: -50px;
    transform: scaleX(-1) rotate(60deg);
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
    top: 300px;
    left: 60px;
    transform: rotate(-90deg);
  }

  .cleaver {
    position: relative;
    width: 180px;
    height: 180px;
    top: -200px;
    left: 160px;
  }
`
const BgCont = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: red;
  background-image: url("/misc/barn2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

// ANIMATIONS

const Chickenbath = styled.div`
  animation-name: ${bathAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
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


// PAGE CONTENT STARTS HERE //
export default function ChickenIndex() {

  const r = useRouter();
  let w = getWeapon();
  let {page} = r.query;

  if (page === undefined) {
    page = 0;
  } 
  
  if (page === 0) { // PAGE 0 //
    if (w === "Bath") {
      return <div>
        {/* <BgCont>  */}
        <Container>
          <Nav />
          <TaskBar />
          <div className="chBathCont hover" onClick={
            () => r.push({
              query: {
                page: Number(page) + 1
              }
            })}>
            <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="bathCont">
            <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
          </div>
        </Container>
        {/* </BgCont> */}
      </div>
    } else if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="aCont hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
            })}>
            <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="wCont">
              <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
    } else if (w === "Tongs") {
        return <div>
          <Container>
          <Nav />
          <TaskBar />
            <div className="chTongsCont">
              <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="tongsCont hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}>
              <Image src={chto[0].weapon} layout="fill" objectFit='contain' />
            </div>
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
          <TaskBar />
            <Chickenbath>
            <div className='chBathCont2 hover' onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}>
              <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
            </div>
            </Chickenbath>
            <div className="bathCont">
              <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
      } else if (w === "CO2") {
          return <div>
            <Container>
              <Nav />
              <TaskBar />
              <div className="aCont">
              </div>
              <div className="wCont hover" onClick={
                () => r.push({
                  query: {
                    page: Number(page) + 1
                  }
                })}>
                <Image src={chco2[1].weapon} layout="fill" objectFit='contain' />
              </div>
            </Container>
          </div>
        } else {
            return <div>
              <Container>
                <Nav />
                <TaskBar />
                <div className="chTongsCont2 hover" onClick={
                  () => r.push({
                    query: {
                      page: Number(page) + 1
                    }
                  })}>
                  <Image src={chco2[0].animal} layout="fill" objectFit='contain' />
                </div>
                <div className="tongsCont2 hover" onClick={
                  () => r.push({
                    query: {
                      page: Number(page) + 1
                    }
                  })}>
                  <Image src={chto[1].weapon} layout="fill" objectFit='contain' />
                </div>
              </Container>
            </div>
        }
    } else if (r.asPath === "/chicken?page=2") { // PAGE 2 //
        if (w === "Bath") {
          return <div>
            <Container>
              <Nav />
              <TaskBar />
              <div className='chBathCont'>
                <Image src={chto[1].animal} layout="fill" objectFit='contain' />
              </div>
              <div className="bathCont">
                <Image src={chba[0].weapon} layout="fill" objectFit='contain' />
              </div>
            </Container>
            <Continue />
          </div>
        } else if (w === "CO2") {
          return <div>
            <Container>
              <Nav />
              <TaskBar />
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
                <TaskBar />
                <div className="chTongsCont2">
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
          <TaskBar />
          <div className="chPage3">
             <Image src={ch[0].animal} layout="fill" objectFit='contain' />
          </div>
          <Knifecont>
          <div className="knife1 hover" onClick={
            () => r.push({
              query: {
                page: Number(page) + 1
              }
            })}>
             <Image src={ch[0].weapon} layout="fill" objectFit='contain' />
          </div>
          </Knifecont>
        </Container>
       </div>
    } else if (r.asPath === "/chicken?page=4") { // Page 4 //
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="chPage3">
              <Image src={ch[1].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="bloodWrap">
            <div className="blood"></div>
            <div className="blood2"></div>
            <div className="blood3"></div>
            <div className="blood4"></div>
            </div>
            <Knifecont2>
            <div className="knife2 hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}>
              <Image src={ch[1].weapon} layout="fill" objectFit='contain' />
            </div>
            </Knifecont2>
          </Container>
        </div>
    } else if (r.asPath === "/chicken?page=5") { // Page 5 //
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="chPage3">
              <Image src={ch[1].animal} layout="fill" objectFit='contain' />
            </div>
          </Container>
          <Continue />
        </div>
    } else if (r.asPath === "/chicken?page=6") { // Page 6 //
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="chPage6 hover" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }})}>
              <Image src={feathers[0].chicken} layout="fill" objectFit='contain' />
            </div>
          </Container>
        </div>
    } else if (r.asPath === "/chicken?page=7") { // Page 7 //
    return <div>
      <Container>
        <Nav />
        <TaskBar />
        <div className="chPage6 hover" onClick={
          () => r.push({
            query: {
              page: Number(page) + 1
            }
          })}>
          <Image src={feathers[1].chicken} layout="fill" objectFit='contain' />
        </div>
        <Feather1>
        <div className="feather">
          <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
        </div>
        </Feather1>
      </Container>
    </div>
    } else if (r.asPath === "/chicken?page=8") { // Page 8 //
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="chPage6 hover" onClick={
            () => r.push({
              query: {
                page: Number(page) + 1
              }
            })}>
            <Image src={feathers[2].chicken} layout="fill" objectFit='contain' />
          </div>
          <Feather2>
            <div className="feather2">
              <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
            </div>
          </Feather2>
        </Container>
      </div>
  } else if (r.asPath === "/chicken?page=9") { // Page 9 //
    return <div>
      <Container>
        <Nav />
        <TaskBar />
        <div className="chPage6 hover" onClick={
          () => r.push({
            query: {
              page: Number(page) + 1
            }
          })}>
          <Image src={feathers[3].chicken} layout="fill" objectFit='contain' />
        </div>
        <Feather3>
          <div className="feather2">
            <Image src={feathers[0].feather} layout="fill" objectFit='contain' />
          </div>
        </Feather3>
      </Container>
    </div>
  } else if (r.asPath === "/chicken?page=10") { // Page 10 //
    return <div>
      <Container>
        <Nav />
        <TaskBar />
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
  } else if (r.asPath === "/chicken?page=11") { // Page 11: Decapitate
    return <div>
      <Container>
        <Nav />
        <TaskBar />
        <div className="chDecap">
          <Image src={ch[2].animal} layout="fill" objectFit='contain' />
        </div>
        <div className="cleaver hover" onClick={
          () => r.push({
            query: {
              page: Number(page) + 1
            }
          })}>
          <Image src={ch[2].weapon} layout="fill" objectFit='contain' />
        </div>
      </Container>
    </div>
  }
}