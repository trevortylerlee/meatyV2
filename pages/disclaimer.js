import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Cont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
`
const Disclaimer = styled.h2`
font-size: 1rem;
font-weight: normal;
text-align: left;
margin: 0;
margin-top: 1rem;
`
const Button = styled.button`
padding: 0.5rem 1rem;
color:black;
background: white;
border: 3px solid green;
font-size: 1rem;
font-weight: bold;
border-radius:30px;
margin-top: 2rem;
cursor: pointer;

&:hover {
    color: white;
    background-color: green;
    transition: 0.3s;
}
`

const Splash = styled.img`
height:100vh;
width:100vw;
object-fit:cover;
`

const ContentCont = styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
top:80px;
height:0vh;
width:100vw;
`

const Tile = styled.div`
    position: relative;
    text-align: center;
    margin: 0 auto;
    width: 380px;
    background: rgba(250,250,255,0.9);
    backdrop-filter: saturate(180%) blur(10px);
    height: 60vh;
    margin-top: 400px;
    border-radius: 10px;
    min-height: 260px;
    padding: 2rem;
    padding-top: 1rem;

    p {
        font-size: 0.75rem;
        color: gray;
        cursor: pointer;
    }
    p:hover {
        text-decoration: underline;
    }
`
const Back = styled.div`
    position: relative;
`
const Butt = styled.div`
    position: relative;
`

export default function(){
    const r = useRouter();

    return <Cont>
        <ContentCont>
            <Tile as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
                onLoad: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.8
                    }
                }
            }}>
                <Disclaimer as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
                    onLoad: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1.5,
                            delay: 0.4
                        }
                    }
                }}>MEATY is an interactive web app where players use real-world methods to slaughter livestock.</Disclaimer>
                <Disclaimer as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
                    onLoad: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1.5,
                            delay: 2
                        }
                    }
                }}>The following content contains material that some people may find upsetting.</Disclaimer>
                <Butt as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
                    onLoad: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.8,
                            delay: 4
                        }
                    }
                }}>
        <Button onClick={
            ()=> 
                r.push({
                pathname:"/animalselection",
            })
        }>I understand and wish to proceed</Button>
        </Butt>
                <Back as={motion.div} className="tipCont" initial="onLoad" animate="visible" variants={{
                    onLoad: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.4,
                        }
                    }
                }}>
        <p onClick={
            () => r.push("/")
        }>Back to title screen</p>
        </Back>
        </Tile>
        </ContentCont>
        <Splash src='/misc/splash.svg'></Splash>
    </Cont>
}