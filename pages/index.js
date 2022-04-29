import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Tile from '../comps/Tile';
import {Select} from '../comps/Tile';

const Header = styled.h1`
  text-align: center;
`

export default function Home() {

  return <div>
      <Header>MEATY</Header>
      <Tile />
    </div>
}
