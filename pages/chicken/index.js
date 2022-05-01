import styled from 'styled-components';

import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks"

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  outline: 2px red solid;
`

export default function ChickenIndex() {
  return <div>
    <Container>
      <Nav />
      <TaskBar />
      <h1>Start of chicken</h1>
    </Container>
  </div>
}