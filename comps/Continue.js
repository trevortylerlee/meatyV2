import { useRouter } from "next/router";
import styled from 'styled-components';

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

  const r = useRouter();
  let {page} = r.query;
  let a = getAnimal();

  if (page === undefined) {
    page = 0;
  }

  if (r.asPath === "/") {
    return <ButtonCont>
      <button onClick={
        () => r.push("/weapons")
      }>Continue</button>
    </ButtonCont>
  } else if (r.asPath === "/weapons") {
      if (a === "Chicken") {
        return <ButtonCont>
          <button onClick={
            () => r.push("/chicken")
          }>Continue</button>
        </ButtonCont>
      } else if (a === "Cow") {
          return <ButtonCont>
            <button onClick={
              () => r.push("/cow")
            }>Continue</button>
          </ButtonCont>
      } else {
        return <ButtonCont>
          <button onClick={
            () => r.push("pig")
          }>Continue</button>
        </ButtonCont>
        }
  } else if (r.asPath === "/chicken") {
      return <ButtonCont>
        <button onClick={
          () => r.push({
            query: {
              page: Number(page) + 1
            }
          })}>Continue</button>
      </ButtonCont>
  } 
  
  else {
    return <ButtonCont>
      <button>Error</button>
    </ButtonCont>
  }
}