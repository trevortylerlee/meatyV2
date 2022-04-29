import Image from "next/image";
import styled from 'styled-components';
import { useState, useEffect } from 'react';


import { animals, weapons } from '../data/selection';

const Container = styled.div`
  text-align: center;
  outline: 2px solid red;
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  width: 400px;
  margin: 0 auto;

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

  const [animal, setAnimals] = useState("Undefined");
  const [words, setWords] = useState("Select an animal.")

  return <div>
    <Container>
      {animals.map((o, i) => 
        <div className="tile" key={i} onClick={()=>setAnimals(o.title)}>
          <div className="titleCont">
            {o.title}
          </div>
          <div className="imgCont">
            <Image src={o.img} layout="fill" objectFit="contain"/>
          </div>
        </div>
      )}
    </Container>
    <div>
      <h3>{animal}</h3>
      <h4>{words}</h4>
    </div>
  </div>
  }

