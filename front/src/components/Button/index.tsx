import React from "react";
import { ContainerButton } from "./style";

interface ButtonInfo {
    info: string
    style?: any
}

export function Button ({info, style}:ButtonInfo){
    return (
        <ContainerButton style = {style} type="submit">{info}</ContainerButton>
    )
}