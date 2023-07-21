import React, { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'; // notificação
import { api } from '../../services/api'
import { AuthContext } from '../../Contexts/auth';

import {
    CardFooterLink,
    CardFooterText,
    CardText,
    ContainerLoginCard,
    LoginCardTitle
} from './style'
import { InputDefault } from '../InputDefault'
import { Button } from '../Button'
import { InputDiv } from '../InputDefault/styles'

export function LoginCard() {

    localStorage.clear();

    // Autorização
    const Auth = useContext(AuthContext);
    Auth.setToken('');

    const navigate = useNavigate();

    const { handleSubmit, control, formState: { errors } } = useForm();

    const Submit = (data: any) => {
        api.post('/login', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            Auth.setToken('Bearer ' + token);
            navigate('/home');
        }).catch(() => {
            toast.error(
                'Erro! Confira o e-mail e a senha e tente novamente...', 
                {theme: 'dark'}
            );
        })
    }

    // estilo do aviso para o usuário
    const WarningStyle = {fontSize: '10px', color: '#E94560'};

    return (
        <ContainerLoginCard
            height='70vh'
            heightMobile='60vh'
            onSubmit={handleSubmit(Submit)}>
            <LoginCardTitle>Login</LoginCardTitle>
            <CardText>
                Coloque para a fora a tempestade que há em seus pensamentos e clareie suas ideias.
            </CardText>
            <InputDiv>
                <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='E-mail'
                            placeholder='Digite um email...'
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.email?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <InputDefault
                            label='Senha'
                            placeholder='Digite sua senha...'
                            isPassword = {true}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.password?.type === 'required' && <p style={WarningStyle}>Campo obrigatório</p>}
            </InputDiv>
            <Button
                info='Entrar'
            />
            <ToastContainer />
            <CardFooterText>
                Ainda não possui cadastrado?
                <CardFooterLink onClick={() => navigate('/cadastro')}> Cadastre-se!
                </CardFooterLink>
            </CardFooterText>
        </ContainerLoginCard>
    )
}