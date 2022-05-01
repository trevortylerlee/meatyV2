import { useRouter } from "next/router";
import styled from 'styled-components';

import { animalSelection } from "./Tile";
import { getAnimal } from "../data/selection";

const ButtonCont = styled.div`
  text-align: center;
  place-content: center;
  width: 400px;
  margin: 0 auto;

  button {
    color: white;
    background-color: red;
    display: flex;
    width: 50%;
    float: right;
    place-content: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 30px;
    border: none; 
    text-transform: uppercase;
    font-weight: bold;
  }
  button:hover {
    background-color: #D00;
    cursor: pointer;
    text-decoration: underline;
  }
  button:active {
    background-color: #900;
    position: relative;
    top: 2px;
  }
`

export default function Continue() {

  return <ButtonCont>
    <button onClick={
      ()=>Route()
    }>Continue</button>
  </ButtonCont>
}

export function Route() {

  let animal = getAnimal();
  console.log(animal + " being exported.")
}