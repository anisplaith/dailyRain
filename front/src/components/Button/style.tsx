import styled from "styled-components";
import { color } from "../../mock";


export const ContainerButton = styled.button`
    width: 98%;
    height: fit-content;
    padding: 15px 25px;
    color: white;
    background-color: ${color.backgroundBlue};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
        width: 99%;
    }
    @media (min-width: 1920px) {
        font-size: 18px;
    }
`