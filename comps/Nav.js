import styled from "styled-components";
import { useRouter } from "next/router";

const NavBar = styled.div`
  text-align: center;
  cursor: pointer;
`

export default function Nav() {

  const r = useRouter();

  return <NavBar>
    <h1 onClick={
      ()=>r.push("/")
      }>MEATY</h1>
  </NavBar>
}