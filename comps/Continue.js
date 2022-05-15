import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from 'styled-components';
import useSound from "use-sound";

import { getAnimal } from "../data/selection";

const ButtonCont = styled.div`
  text-align: center;
  place-content: center;
  width: 400px;
  margin: 0 auto;
  margin-top: 1.5rem;
  z-index: 9999;

  button {
    background-color: white;
    display: flex;
    margin: 0 auto;
    place-content: center;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border-radius: 30px;
    border: 4px solid green; 
    font-weight: bold;
    z-index: 9999;
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

  if (r.asPath === "/animalselection") {
    return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
      onLoad: {
        scale: .4,
        opacity: 0
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    }}>
      <button onClick={
        () => {
          {play("/sounds/ping.mp3")};
          r.push("/weapons");
        }}>Continue →</button>

    </ButtonCont>
  } else if (r.asPath === "/weapons") {
      if (a === "Chicken") {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              {play("/sounds/ping.mp3")};
              r.push("/chicken");
            }}>Continue →</button>
        </ButtonCont>
      } else if (a === "Cow") {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
            <button onClick={
              () => {
                {play("/sounds/ping.mp3")};
                r.push("/cow")
            }}>Continue →</button>
          </ButtonCont>
      } else {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push("pig")
            }}>Continue →</button>
        </ButtonCont>
        }
  } else if (r.pathname === "/chicken") {
      if (r.asPath === "/chicken?page=13") {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push("/chicken/end");
            }}>Continue →</button>
        </ButtonCont>
      } else {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push({
                query: {
                  page: Number(page) + 1
                }
              })
            }}>Continue →</button>
        </ButtonCont>
      }
  } else if (r.pathname === "/cow") {
      if (r.asPath === "/cow?page=8") {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push("/cow/end");
            }}>Continue →</button>
        </ButtonCont>
      }
      else {
        return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
          onLoad: {
            scale: .4,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}>
          <button onClick={
            () => {
              { play("/sounds/ping.mp3") };
              r.push({
                query: {
                  page: Number(page) + 1
                }
              })
            }}>Continue →</button>
        </ButtonCont>
      }
  } else if (r.pathname === "/pig") {
    return <ButtonCont as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
      onLoad: {
        scale: .4,
        opacity: 0
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    }}>
      <button onClick={
        () => {
          { play("/sounds/ping.mp3") };
          r.push({
          query: {
            page: Number(page) + 1
          }
        })
        }}>Continue →</button>
    </ButtonCont>
  }
}
