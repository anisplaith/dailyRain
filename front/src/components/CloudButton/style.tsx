import styled from "styled-components";

export const CloudImg = styled.img`
    width: 40%;
    margin-top: 35px;
    height: fit-content;
    *border: solid 2px grey;
    :hover{
        width: 42%;
        cursor: pointer;
    }
    z-index: 20;
    @media (max-width: 1024px) {
        margin-top: 0;
        z-index: 10;
    }
`

export const CloudButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    @media (max-width: 1024px) {
        display: none;
    }
    *border: solid 2px red;
`
export const RainDiv = styled.div`
    border: solid 2px red;
    @media (max-width: 1024px) {
       display: none;
    }
`
export const Illustration = styled.img`
    width: 95%;
    height: fit-content;
    @media (max-width: 1024px) {
        display: none;
    }
`
export const CloudButtonDivMobile = styled.div`
    display: none;
    flex-direction: column;
    @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        width: 100vw;
        height: fit-content;
    }
    *border: solid 2px red;
`