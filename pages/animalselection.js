import styled from 'styled-components';

import Continue from '../comps/Continue';
import Nav from '../comps/Nav';
import Tile from '../comps/Tile';

// STYLED COMPONENTS
const Container = styled.div`
  widtH: 400px;
  height: 80vh;
  margin: 0 auto;
  /* outline: 2px red solid; */
`

// PAGE CONTENT STARTS BELOW
export default function Home() {

  return <div>
    <Container>
      <Nav />
      <Tile />
    </Container>
  </div>
}
