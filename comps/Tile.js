import Image from "next/image";
import styled, {keyframes} from 'styled-components';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { animals, changeAnimal, changeWeapon, chWeapons, copiWeapons, getAnimal, getWeapon } from '../data/selection';
import { fadeIn, fadeOut } from "../data/animation";

// --------------------
//  STYLING STARTS HERE
// --------------------
const TileContainer = styled.div`
  text-align: center;
  outline: 2px solid red;
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
    background: ${props=>props.bg || "white"};

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

const DescCont = styled.div`
  text-align: center;
  outline: 2px solid red;
  place-content: center;
  width: 400px;
  margin: 0 auto;
  animation: ${props=>props.fade} 3s;
`

// ----------------
// PAGE STARTS HERE
// ----------------
export default function Tile() {

  const r = useRouter();
  const [animal, setAnimals] = useState("Select an animal.");
  const [weapon, setWeapons] = useState("Select a weapon.")
  const [words, setWords] = useState("");
  const a = getAnimal();
  const w = getWeapon()

  if (r.asPath === "/") {
    return <div>
      <TileContainer>
        {animals.map((o, i) =>
          <div className="tile" key={i} onClick={() => {
            setAnimals(o.title);
            setWords(o.desc);
            animalSelection(o.title);
          }}>
            <div className="titleCont">
              {o.title}
            </div>
            <div className="imgCont">
              <Image src={o.img} layout="fill" objectFit="contain" />
            </div>
          </div>
        )}
      </TileContainer>
      <DescCont>
        <h3>{animal}</h3>
        <p>{words}</p>
      </DescCont>
    </div>
  } else if (r.asPath === "/weapons") {
    if (a === "Chicken") {
      return <div>
        <TileContainer>
          {chWeapons.map((o, i) =>
            <div className="tile" key={i} onClick={() => {
              setWeapons(o.title);
              setWords(o.desc);
              weaponSelection(o.title);
            }}>
              <div className="titleCont">
                {o.title}
              </div>
              <div className="imgCont">
                <Image src={o.img} layout="fill" objectFit="contain" />
              </div>
            </div>
          )}
        </TileContainer>
        <DescCont>
          <h3>{weapon}</h3>
          <p>{words}</p>
        </DescCont>
      </div>
    } else {
      return <div>
        <TileContainer>
          {copiWeapons.map((o, i) =>
            <div className="tile" key={i} onClick={() => {
              setWeapons(o.title);
              setWords(o.desc);
              weaponSelection(o.title);
            }}>
              <div className="titleCont">
                {o.title}
              </div>
              <div className="imgCont">
                <Image src={o.img} layout="fill" objectFit="contain" />
              </div>
            </div>
          )}
        </TileContainer>
        <DescCont>
          <h3>{weapon}</h3>
          <p>{words}</p>
        </DescCont>
      </div>
    }
  }
}

// Functions start here
export function animalSelection(a) {
  changeAnimal(a);
}

export function weaponSelection(w) {
  changeWeapon(w);
}