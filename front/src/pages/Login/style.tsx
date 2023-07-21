import styled from "styled-components";
import { color, LayoutSizes } from "../../mock";


export const PageLogin = styled.div`
    display: flex;
    justify-content: inherit;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: ${LayoutSizes.fullScreenWidth};
    height: ${LayoutSizes.fullScreenHeight};
    background-color: ${color.backgroundBlue};
    @media(max-width: 1200px){
        justify-content: space-between;
    }
`