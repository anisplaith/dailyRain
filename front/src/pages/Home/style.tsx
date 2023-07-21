import styled from "styled-components";
import { color, fontFamily, LayoutSizes } from "../../mock";

export const PageHome = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${LayoutSizes.fullScreenWidth};
    height: ${LayoutSizes.fullScreenHeight};
    background-color: ${color.backgroundGrey};
    font-family: ${fontFamily.inter};
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`