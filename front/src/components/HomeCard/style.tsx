import styled from "styled-components";
import { color, LayoutSizes } from "../../mock";

export const ContainerHome = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${LayoutSizes.fullScreenWidth};
    height: ${LayoutSizes.fullScreenHeight};
    background-color: ${color.backgroundGrey};
    @media (max-width: 1024px) {
        justify-content: center;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`
export const LeftDivHome = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
`
export const HomeText = styled.h1`
    color: #7E57C2;
    padding: 30px;
    @media (max-width: 1024px) {
        font-size: 25px;
    }
`
export const NotesHomeDiv = styled.div`
    display: flex;
    padding-left: 2vw;
    gap: 3vw;
    width: 70vw;
    height: 80vh;
    overflow-y: auto;
    flex-flow: row wrap;
    @media (max-width: 1024px) {
        width: 95%;
        padding-left: 5vw;
        height: 73vh;
        gap: 5vw;
    }
`
export const LogOut = styled.img`
    width: 30px;
    width: 30px;
    position: relative;
    top: 4px;
    margin-right: 10px;
    :hover{
        cursor: pointer;
        opacity: 0.6;
    }
    @media (max-width: 1024px) {
        padding-left: 20px;
        padding-top: 20px;
    }
    
`
export const ContainerHomeMobile = styled.div`
    display: none;
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: ${LayoutSizes.fullScreenWidth};
        height: ${LayoutSizes.fullScreenHeight};
        background-color: ${color.backgroundGrey};
        padding-bottom: 10px;
    }

`