import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Button } from '../Button'
import { InputDefault } from '../InputDefault'
import { InputDiv } from '../InputDefault/styles'
import {
    CardFooterLink,
    CardFooterText,
    ContainerLoginCard,
    LoginCardTitle
} from '../LoginCard/style'
import { RegisterContainer } from './style'
import { api } from '../../services/api'
import { AuthContext } from '../../Contexts/auth';

export function RegisterCard() {
    
    const Auth = useContext(AuthContext)
    

    const { control, formState: { errors }, handleSubmit, getValues } = useForm();

    const navigate = useNavigate();
    // Dá um delay de 3s no navigate para que dê tempo do toast (notificação) ser executado
    const navigateTimer = () => setTimeout(() => navigate('/'), 1500); 

    const onSubmit = async (data: any) => {
        await api.post('/user', {...data, picture: ''}).then(res => {
            toast.dark('Conta criada com sucesso! Redirecionando para Login...', {autoClose: 1000})
            navigateTimer();
        })
    }

    // estilo do aviso para o usuário
    const WarningStyle = {fontSize: '10px', color: '#E94560'}

    return (
        <ContainerLoginCard
            onSubmit={handleSubmit(onSubmit)}
            height='88vh'
            heightMobile='78vh'
            style={{ gap: '10px', paddingBottom: '10px', paddingTop: '10px' }}>
            <LoginCardTitle>Cadastre-se</LoginCardTitle>
            <InputDiv>
                {/* V react-hook-form V */}
                <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='Nome'
                            placeholder='Digite seu nome...'
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.name?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
                <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='E-mail'
                            placeholder='Digite seu e-mail...'
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.email?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: true, minLength: 8 }}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='Senha'
                            placeholder='Digite sua senha...'
                            isPassword={true}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.password?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
                {errors.password?.type === 'minLength' && <p style={WarningStyle}>Crie uma senha com pelo menos 8 digitos</p>}
                <Controller
                    name='confirm'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='Confirmar Senha'
                            placeholder='Confirme a senha...'
                            isPassword={true}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    rules={{
                        required: true, validate: {
                            matchesPreviousPassword: (value: any) => {
                                const { password } = getValues();
                                return password === value || 'Senhas diferentes'
                            }
                        }
                    }}
                />
                {errors.confirm?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
                {errors.confirm?.message && <p style={WarningStyle}>Senhas diferentes</p>}
            </InputDiv>
            <Button
                info='Cadastrar'
            />
            <ToastContainer />
            <CardFooterText>
                Já possui cadastrado?
                <CardFooterLink onClick={() => navigate('/')}> Entre aqui!</CardFooterLink>
            </CardFooterText>
        </ContainerLoginCard>
    )
}