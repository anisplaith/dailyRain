import { useContext } from "react";
import { EditorCard } from "../../components/EditorCard";
import { AuthContext } from "../../Contexts/auth";

export function Editor (){
    const Auth = useContext(AuthContext);

    return (
        <>
            {Auth.signed ?
                <><EditorCard /></> :
                <p>Não Autorizado! Faça login para ter acesso...</p>
            }
        </>
    )
}