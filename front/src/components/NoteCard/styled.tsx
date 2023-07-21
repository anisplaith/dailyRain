import styled from "styled-components";

export const NotePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 15px;
    height: 100vh;
    background-color: #ae98d54b;
    
`
export const NoteContainer = styled.div`
    width: 90vw;
    height: 90vh;
    padding: 20px;
    overflow: auto;
`

export const TrashButton = styled.img`
    width: 35px;
    height: 35px;
    z-index: 100;
    :hover{
        cursor: pointer;
        opacity: 0.7;
    }
    @media (min-width: 1600px) {
        width: 40px;
        height: 40px;  
    }
`
