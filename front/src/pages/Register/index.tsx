import React from 'react'
import { Lightning } from '../../components/Lightning'
import { RegisterCard } from '../../components/RegisterCard'
import { PageLogin } from '../Login/style'

export function Register (){
    
    return (
        <PageLogin>
            <Lightning/>
            <RegisterCard/>
        </PageLogin>
    )
}