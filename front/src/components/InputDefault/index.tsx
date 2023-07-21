import React, { useState } from "react";
import {useForm} from 'react-hook-form'

import { Eyes, Input, InputContainer, InputDiv, InputLabel } from "./styles";
import OpenEye from '../../assets/OpenEye.svg'
import ClosedEye from '../../assets/ClosedEye.svg'


interface InputData {
    label: string
    value?: string;
    placeholder: string
    isPassword?: boolean
    onChange?: any
}

export function InputDefault({value, label, placeholder, isPassword, onChange}: InputData) {

    const [eye, setEye] = useState<boolean>(false)

    return (
        <InputContainer>
            <InputDiv>
                <InputLabel>{label}</InputLabel>
                <div style={{width: '100%', height: '40px'}}>
                <Input
                    placeholder = {placeholder}
                    type = {(isPassword && !eye)? 'password': ''}
                    onChange = {onChange}
                    />
                <Eyes 
                    isPassword = {isPassword? true : false} 
                    src={eye? OpenEye: ClosedEye}  
                    onClick = {() => setEye(!eye)}/>
                </div>
                
            </InputDiv>
        </InputContainer>
    )
}