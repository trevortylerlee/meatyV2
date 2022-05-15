import styled from "styled-components";
import { useRouter } from "next/router";
import useSound from "use-sound";

const Back = styled.text`
    font-size: 1.5rem;
    font-weight: bold;
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
            }}>←</Back>
    </div>
}