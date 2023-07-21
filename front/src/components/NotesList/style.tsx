import styled from "styled-components";
import { color } from "../../mock";

export const NotesDiv = styled.div`
    width: 46%;
    height: 43%;
    border-radius: 10px;
    background-color: ${color.lightPurple};
    color: ${color.backgroundGrey};
    @media (max-width: 1024px) {
        width: 95%;
    }
    :hover{
        cursor: pointer;
        background-color: ${color.backgroundBlue};
    }
`
export const Notes = styled.img`
    width: 100%;
    height: 78%;
    opacity: 0.57;
    border-radius: 10px 10px 0px 0px;
`
export const Title = styled.h2`
    font-size: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: fit-content;
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    *border: solid 2px red;
    @media (min-width: 1600px) {
        font-size: 25px;
        
    }
`
export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 17.5%;
    z-index: 90;
    *border: 2px solid red;
`