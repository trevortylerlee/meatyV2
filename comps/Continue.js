import { useRouter } from "next/router";
import styled from 'styled-components';

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

  return <ButtonCont>
    <button onClick={
      ()=>r.push("/")
    }>Continue</button>
  </ButtonCont>
}