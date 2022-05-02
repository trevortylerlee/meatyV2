import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getAnimal, getWeapon } from '../data/selection';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  outline: 2px red solid;
`

export default function TaskBar() {
  
  let r = useRouter();
  let a = getAnimal();
  let w = getWeapon();

  if (r.asPath === "/chicken") {
    return <Container>
      <h3>INSTRUCTIONS HERE</h3>
    </Container>
  } else if (r.asPath === "/chicken?page=1") {
      return <Container>
        <h3>Let's move on!</h3>
      </Container>
  }
}