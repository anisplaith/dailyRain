import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";

import { HomeCard } from "../../components/HomeCard";
import { PageLogin } from "../Login/style";
import { PageHome } from "./style";



export function Home() {
    // Autorização: evita que a home seja acessada sem ter feito login
    const Auth = useContext(AuthContext); 

    return (
        <PageHome>
            {Auth.signed ?
                <><HomeCard /></> :
                <p>Não Autorizado! Faça login para ter acesso...</p>
            }
        </PageHome>
    )
}