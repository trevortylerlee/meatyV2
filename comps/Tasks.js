import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getAnimal, getWeapon } from '../data/selection';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  outline: 2px red solid;
`

export default function TaskBar() {
  
  const r = useRouter();
  let {page} = r.query;
  let a = getAnimal();
  let w = getWeapon();

  if (a === "Chicken") {
    if (r.asPath === "/chicken?page=3") {
      return <Container>
        <h3>Click the knife to slit the throat.</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=4") {
      return <Container>
        <h3>Click the knife to stop.</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=5") {
      return <Container>
        <h3>Click continue to continue</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=6") {
      return <Container>
        <h3>Defeather that mofo</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=7") {
      return <Container>
        <h3>Keep at it</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=8") {
      return <Container>
        <h3>Keep at it</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=9") {
      return <Container>
        <h3>Keep at it</h3>
      </Container>
    } else if (r.asPath === "/chicken?page=10") {
      return <Container>
        <h3>Click continue</h3>
      </Container>
    } else if (w === "Bath") {
        if (r.asPath === "/chicken") {
          return <Container>
            <h3>Click the chicken</h3>
          </Container>
        } else if (r.asPath === "/chicken?page=1") {
          return <Container>
            <h3>Ok click the chicken again to stop</h3>
          </Container>
        } else if (r.asPath === "/chicken?page=2") {
          return <Container>
            <h3>Press continue to continue duh</h3>
          </Container>
        }
    } else if (w === "CO2") {
        if (r.asPath === "/chicken") {
          return <Container>
            <h3>Click the Chicken</h3>
          </Container>
        } else if (r.asPath === "/chicken?page=1") {
          return <Container>
            <h3>Click the chamber</h3>
          </Container> 
        } else if (r.asPath === "/chicken?page=2") {
          return <Container>
          <h3>Press continue</h3>
          </Container>
        }
    } else {
        if (r.asPath === "/chicken") {
          return <Container>
            <h3>Pickup the tongs by clicking on it</h3>
          </Container>
        } else if (r.asPath === "/chicken?page=1") {
            return <Container>
              <h3>Click on the tongs to stop</h3>
            </Container>
        } else if (r.asPath === "/chicken?page=2") {
          return <Container>
            <h3>Press continue to continue</h3>
          </Container>
        }
    }
  } else if (a === "Cow") {
      if (w === "CO2") {

      } else if (w === "Gun") {
        return <Container>
          <h3>Click the target on the cow's head to stun them.</h3>
        </Container>
      } else if (w === "Tongs") {
        return <Container>
          <h3>Click the tongs</h3>
        </Container>
      }
  } else if (a === "Pig") {

  }
}