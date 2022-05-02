import Image from 'next/image';
import styled from 'styled-components';

import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks"

import { chco2 } from '../../data/selection';

const Container = styled.div`
  width: 400px;
  height: 800px;
  margin: 0 auto;
  outline: 2px red solid;
  
  .aCont {
    position: relative;
    width: 200px;
    height: 200px;
    place-content: center;
    top: 420px;
    left: 100px;
  }

  .wCont {
    position: relative;
    width: 250px;
    height: 250px;
    left: 70px;
    top: -150px;
  }
`

const wCont = styled.div`
`

export default function ChickenIndex() {
  return <div>
    <Container>
      <Nav />
      <TaskBar />
      <div className="aCont">
        <Image src={chco2[0].animal} layout="fill" objectFit='contain'/>
      </div>
      <div className="wCont">
        <Image src={chco2[0].weapon} layout="fill" objectFit='contain' />
      </div>
      
    </Container>
  </div>
}