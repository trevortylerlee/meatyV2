import styled from 'styled-components';

import Continue from '../comps/Continue';
import Nav from '../comps/Nav';
import Tile from '../comps/Tile';

// STYLED COMPONENTS
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: red;
  background-image: url("/misc/barn2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

// PAGE CONTENT STARTS BELOW
export default function Home() {

  return <div>
    {/* <Container> */}
      <Nav />
      <Tile />
    {/* </Container> */}
  </div>
}
