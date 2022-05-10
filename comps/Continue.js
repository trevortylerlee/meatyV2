import { useRouter } from "next/router";
import styled from 'styled-components';

import { getAnimal } from "../data/selection";

// Sound
import useSound from "use-sound";

const ButtonCont = styled.div`
  text-align: center;
  place-content: center;
  width: 400px;
  margin: 0 auto;

  button {
    background-color: white;
    display: flex;
    width: 50%;
    float: right;
    place-content: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 30px;
    border: 4px solid green; 
    font-weight: bold;
  }
  button:hover {
    color: white;
    background-color: green;
    cursor: pointer;
    text-decoration: underline;
    transition: 0.3s;
  }
  button:active {
    position: relative;
    top: 4px;
  }
`

export default function Continue() {

  const r = useRouter();
  let {page} = r.query;
  let a = getAnimal();
  const [play] = useSound("/sounds/ping.mp3");

  if (page === undefined) {
    page = 0;
  }

  if (r.asPath === "/") {
    return <ButtonCont>
      <button onClick={
        () => {
          {play("/sounds/ping.mp3")};
          r.push("/weapons");
      }}>Continue</button>
    </ButtonCont>
  } else if (r.asPath === "/weapons") {
      if (a === "Chicken") {
        return <ButtonCont>
          <button onClick={
            () => {
              {play("/sounds/ping.mp3")};
              r.push("/chicken");
          }}>Continue</button>
        </ButtonCont>
      } else if (a === "Cow") {
          return <ButtonCont>
            <button onClick={
              () => {
                {play("/sounds/ping.mp3")};
                r.push("/cow")
            }}>Continue</button>
          </ButtonCont>
      } else {
        return <ButtonCont>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push("pig")
          }}>Continue</button>
        </ButtonCont>
        }
  } else if (r.pathname === "/chicken") {
      return <ButtonCont>
        <button onClick={
          () => {
            { play("/sounds/ping.mp3") };
            r.push({
            query: {
              page: Number(page) + 1
            }
          })}}>Continue</button>
      </ButtonCont>
  } else if (r.pathname === "/cow") {
    return <ButtonCont>
      <button onClick={
        () => {
          { play("/sounds/ping.mp3") };
          r.push({
          query: {
            page: Number(page) + 1
          }
        })
      }}>Continue</button>
    </ButtonCont>
  } else if (r.pathname === "/pig") {
    return <ButtonCont>
      <button onClick={
        () => {
          { play("/sounds/ping.mp3") };
          r.push({
          query: {
            page: Number(page) + 1
          }
        })
      }}>Continue</button>
    </ButtonCont>
  }
}

// Function
