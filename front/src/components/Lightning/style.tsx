import styled from "styled-components";

export const LightningDiv = styled.div`
    width: 98%;
    height: 2%;
`
export const LightningAnimation = styled.img`
    width: 100%;
    animation: lightning 3s  linear infinite;
    @keyframes lightning {
        0% {
            opacity: 0;
        }
        20%{
            opacity: 0;
        }
        21% {
            opacity: 0.2;
        }
        25% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        31% {
            opacity: 0.3;
        }
        35% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    @media (max-width: 800px) {
        height: 250px;
    }
`