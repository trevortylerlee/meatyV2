import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

import { chco2 } from '../../data/selection';
import { getWeapon } from '../../data/selection';

const Container = styled.div`
  width: 400px;
  height: 600px;
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
  .aCont:hover {
    filter: drop-shadow(4px 4px 8px red);
    cursor: pointer;
  }

  .wCont {
    position: relative;
    width: 250px;
    height: 250px;
    left: 70px;
    top: -50px;
  }
`

export default function ChickenIndex() {

  const r = useRouter();
  let w = getWeapon();
  let {page} = r.query;

  if (page === undefined) {
    page = 0;
  } 
  
  if (w === "Bath") {
    return <div>
      <Container>
        <Nav />
        <TaskBar />
      </Container>
    </div>
  } else if (w === "CO2") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="aCont" onClick={
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
        <Continue />
      </div>
    } else {
      return <div>
        <Container>
          <h1>Error</h1>
        </Container>
      </div>
    }
}