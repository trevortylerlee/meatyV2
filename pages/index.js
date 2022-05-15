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
align-items:center;
justify-content:center;
top:0;
height:40vh;
width:100vw;
`

const Splash = styled.img`
height:100vh;
width:100vw;
object-fit:cover;
`
const Logo = styled.h1`
position:relative;
font: bold 64px Gill Sans, sans-serif;
`
const Start = styled.button`
position:relative;
margin-top:2rem;
height:40px;
width:80px;
border:none;
border-radius:4px;
background:#871010;
color:white;
font:20px Ubuntu;
`

export default function(){
    const r = useRouter();
    const [farm] = useSound("/sounds/farm.mp3");
    
    if(r.pathname === "/"){
    return <Cont>
    <ContentCont>
        <Logo>MEATY</Logo>
        <Start onClick={
            ()=> {
                {farm("/sounds/farm.mp3")};
                r.push({
                pathname:"/disclaimer",
            })
        }}>Start</Start>
    </ContentCont>
        <Splash src='/misc/splash.svg'></Splash>
    </Cont>
    }
}