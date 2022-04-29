import Image from "next/image";
import styled from 'styled-components';


import { animals, weapons } from '../data/selection';

const Container = styled.div`
  text-align: center;
  outline: 2px solid red;
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;

  h2 {
    padding: 0;
    margin: 0.5rem 1rem;
  }

  .tile {
    outline: 2px solid blue;
    padding: 1rem;
    margin: 1rem;
    border-radius: 20px;
  }
  .tile:hover {
    background: lightgray;
    cursor: pointer;
  }
  .tile:active {
    background: darkgray;
  }

  .titleCont {
    display: block;
    text-align: center;
  }

  .imgCont {
    width: 50px;
    height: 50px;
    position: relative;
    margin: 0 auto;
  }
`

export default function Tile() {

  return <Container>
    {animals.map((o, i) => 
      <div className="tile" key={i}>
        <div className="titleCont">
          {o.title}
        </div>
        <div className="imgCont">
          <Image src={o.img} layout="fill" objectFit="contain"/>
        </div>
      </div>
    )}

    {/* {weapons.map((o,i)=>
      <Container>
        {o.title}
      </Container>
    )} */}
  </Container>
}