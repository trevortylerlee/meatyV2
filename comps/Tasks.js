import styled from 'styled-components';

import { getAnimal, getWeapon } from '../data/selection';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  outline: 2px red solid;
`

export default function TaskBar() {
  
  let a = getAnimal();
  let w = getWeapon();

  return <Container>
    <h3>INSTRUCTIONS HERE</h3>
  </Container>
}