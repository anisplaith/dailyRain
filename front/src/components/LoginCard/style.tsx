import styled from "styled-components";
import { color, fontColor, fontFamily } from "../../mock";
interface ContainerHeight {
    height: string
    heightMobile: string
}
export const ContainerLoginCard = styled.form<ContainerHeight>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
    height: ${prop => prop.height};
    font-family: ${fontFamily.inter};
    padding-left: 30px;
    padding-right: 30px;
    background-color: ${color.backgroundGrey};
    border-radius: 20px;
    box-shadow: 2px 2px 10px #9c91cd; /* eixo-x | eixo-y | blur | cor */
    z-index: 20;
    @media(max-width: 1200px){
        width: 40vw;
        border-radius: 20px 20px 0px 0px;
    }
    @media(max-width: 835px){
        width: 75vw;
        height: ${prop => prop.heightMobile};
        border-radius: 20px 20px 0px 0px;
    }
    @media(min-width: 1920px){
        width: 30vw;
        height: ${prop => prop.heightMobile};
    }
`
export const LoginCardTitle = styled.h1`
    color: ${fontColor.darkBlue};
    @media(min-width: 1800px){
        font-size: 2.5rem;
    }
`
export const CardText = styled.p`
    width: 90%;
    color: ${fontColor.grey};
    font-size: 19px;
    text-align: center;
    @media(min-width: 1800px){
        font-size: 25px;
    }
`
export const CardFooterText = styled.p`
    display: inline-block;
    color: ${fontColor.grey};
    font-size: 16px;
`
export const CardFooterLink = styled.a`
    font-size: 16px;
    color: ${color.backgroundBlue};
    text-decoration: none;
    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
`
