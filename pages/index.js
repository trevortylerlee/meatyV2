import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSound from 'use-sound';


const Cont = styled.div`
display:flex;
justify-content:center;
height:100vh;
width:100vw;
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

const Splash = styled.img`
height:100vh;
width:100vw;
object-fit:cover;
`
const Logotype = styled.h1`
position:relative;
font: bold 48px Gill Sans, sans-serif;
top: -16px;
margin: 0;
`
const Start = styled.button`
position:relative;
background: white;
margin: 0 auto;
padding: 0.5rem 4rem;
border-radius: 30px;
border: 4px solid green;
font-size: 1.5rem;
margin-top: 20px;
font-weight: bold;

&:hover {
    color: white;
    background-color: green;
    cursor: pointer;
    text-decoration: underline;
    transition: 0.3s;
}
&:active {
    top: 2px;
}
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
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    min-height: 360px;

    .logoCont {
        overflow: visible;
        position: relative;
        place-content: center;
        height: 130px;
        display: flex;
    }
    .logo {
        background-image: url("/misc/logo.png");
        background-size: 110px;
        background-repeat: no-repeat;
        width: 120px;
        height: 120px;
    }

    p {
        position: relative;
        margin: 0;
        margin-top: 54px;
        font-size: 0.75rem;
        color: lightgray;
    }
    p:hover {
        color: black;
    }
`

export default function(){
    const r = useRouter();
    const [farm] = useSound("/sounds/farm.mp3");
    
    if(r.pathname === "/"){
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
                        duration: 0.8,
                        delay: 0
                    }
                }
            }}>
        <div className="logoCont">
        <div className="logo">
        </div>
        </div>
        <Logotype>MEATY</Logotype>
        <Start onClick={
            ()=>
                r.push({
                pathname:"/disclaimer",
            })
        }>Start</Start>
        <p>Created by Trevor Lee, Ivan Li, and Ivan Tong</p>

        </Tile>
    </ContentCont>
        <Splash src='/misc/splash.svg'></Splash>
    </Cont>
    }
}