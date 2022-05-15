import styled from "styled-components";
import { useRouter } from "next/router";
import useSound from "use-sound";

const Back = styled.text`
position:relative;
transform:scaleX(-1);
font-size:40px;
left:5rem;
top:1rem;

.arrow:hover {
    color:#871010;
    cursor:pointer;
}
`

export default function Backk() {
    const [toc] = useSound("sounds/toc.mp3");
    const r = useRouter();

    function goBack(){
        r.back()
    }

    return <div>
        <Back className="arrow" onClick={
            () => {
            {toc("sounds/toc.mp3")};
                goBack()
        }}>➜</Back>
    </div>
}