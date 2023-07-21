import styled from "styled-components";
import { color, fontColor } from "../../mock";

interface passwordInfo {
    isPassword: boolean
}

export const InputContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    border-radius: 15px;
`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
`
export const Input = styled.input`
    width: 98%;
    border-radius: 15px;
    height: 35px;
    padding-left: 6px;
    padding-right: 4px;
    border: solid 2px ${color.lightGrey};
    background-color: ${color.backgroundGrey};
    color: ${fontColor.grey};
    font-size: 15px;
    &:focus{
        outline: none;
        color: ${fontColor.grey};
    }
`

export const InputLabel = styled.p`
    font-size: medium;
    font-weight: 600;
    color: ${fontColor.darkBlue};
    @media(min-width: 1600px){
        font-size: 16px;
    }
`
export const Eyes = styled.img<passwordInfo>`
    display: ${prop => prop.isPassword? 'block': 'none'};
    position: relative;
    width: 24px;
    height: 24px;
    z-index: 10;
    top: -78%;
    left: 90%;
    &:hover{
        opacity: 0.7;
    }

`
    