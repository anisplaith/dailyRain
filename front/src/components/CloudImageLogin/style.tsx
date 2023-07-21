import styled from "styled-components";
import { color } from "../../mock";

interface Order {
    order?: string
    borderLR?: string // left and right
    borderB?: string // bottom
}
export const ContainerCloud = styled.div `
    display: flex;
    justify-content: space-between;
    width: 98%;
    height: 20%;
    padding-top: 10px;
    @media(max-width: 1200px){
        justify-content: center;
    }
    *border: solid 2px red;
`

export const CloudDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 25%;
    height: 100%;
    @media(max-width: 1200px){
        display: none;
    }
    *border: solid 2px blue;
`
export const Cloud = styled.img`
    position: relative;
    width: 90%;
    z-index: 10;
    *border: solid 1px green;
`

export const Rain = styled.div`
    display: flex;
    position: absolute;
    top: 85px;
    *border: solid 2px yellow;
`
export const RainDrops = styled.span<Order>`
    width: 0px;
    height: 0px;
    margin: 0 5px;
    border-bottom: ${prop => prop.borderB? prop.borderB : '19px'} solid ${color.dropBlue};
    border-right: ${prop => prop.borderLR? prop.borderLR : '7px'} solid transparent;
    border-left: ${prop => prop.borderLR? prop.borderLR : '7px'} solid transparent;
    border-radius: 60%;
    @keyframes animationRain {
        0%{
            transform: translateY(0) scale(1);
        }
        70%{
            transform: translateY(80vh) scale(0.5);
        }
        100%{
            transform: translateY(80vh) scale(0);
        }   
    }
    animation: animationRain 1.5s linear infinite;
    animation-delay: ${prop => prop.order};
    @media(max-width: 1200px){
        border-bottom: 16px solid ${color.dropBlue};
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }
`
// versão mobile
export const CloudMobile = styled.img`
    display: none;
    @media(max-width: 1200px){
        display: flex;
        width: 80%;
        z-index: 10;
    }
`
export const CloudMobileDiv = styled.div`
    display: none;
    @media(max-width: 1200px){
        display: flex;
        justify-content: center;
        width: 98%;
        height: 100%;    
        *border: solid 2px red;
    }
`

