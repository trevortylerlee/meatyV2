import { useRouter } from 'next/router';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
padding:2rem;
`
const Disclaimer = styled.text`
font:36px Ubuntu;
text-align:center;
margin-bottom:2rem;
`
const Button = styled.button`
height:40px;
width:340px;
background:#871010;
color:white;
font:20px Ubuntu;
border:none;
border-radius:4px;
`

export default function(){
    const r = useRouter();

    return <Cont>
        <Disclaimer>The following content contains material that some  people may find upsetting.</Disclaimer>
        <Button onClick={
            ()=> r.push({
                pathname:"/animalselection",
            })
        }>I understand and wish to proceed</Button>
    </Cont>
}