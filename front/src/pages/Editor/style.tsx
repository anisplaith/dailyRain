import styled from "styled-components";
import { color, LayoutSizes } from "../../mock";

export const PageEditor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: ${LayoutSizes.fullScreenWidth};
    height: ${LayoutSizes.fullScreenHeight};
    background-color: ${color.backgroundGrey};
`

export const TitleInput = styled.input`
    width: 30%;
    height: 30px;
    border: none;
    outline: none;
    background-color: ${color.backgroundGrey};
    color: #808080;
    padding: 0px 5px 0px 5px;
    border-radius: 20px;
    font-size: 17px;
    @media (max-width: 820px) {
        width: 65%;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    width: 98%;
`
export const Button = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 15px 25px;
    color: white;
    background-color: ${color.lightPurple};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
    @media (min-width: 1920px) {
        font-size: 18px;
    }
`