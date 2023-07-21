import React from "react";
import { CloudImageLogin } from "../../components/CloudImageLogin";
import { LoginCard } from "../../components/LoginCard";
import { PageLogin } from "./style";


export function Login (){

    return(
        <PageLogin>
            <CloudImageLogin></CloudImageLogin>
            <LoginCard></LoginCard>
        </PageLogin>
    )
}