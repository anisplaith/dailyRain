import React from "react";
import { LightningAnimation, LightningDiv } from "./style";
const lightning = 'https://i.pinimg.com/originals/0d/dd/5e/0ddd5eea6b4e06a9d6fb06a229688112.png'

export function Lightning (){
    return (
        <LightningDiv>
            <LightningAnimation src = {lightning}/>
        </LightningDiv>
    )
}