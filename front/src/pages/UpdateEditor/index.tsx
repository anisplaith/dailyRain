import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";

import { UpdateEditorCard } from "../../components/UpdateEditorCard";

export function UpdateEditor() {
    const Auth = useContext(AuthContext);

    return (
        <>
            {Auth.signed ?
                <><UpdateEditorCard /></> :
                <p>Não Autorizado! Faça login para ter acesso...</p>
            }
        </>)
}