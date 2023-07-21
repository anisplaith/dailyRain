import { useContext } from "react";
import { NoteCard } from "../../components/NoteCard";
import { AuthContext } from "../../Contexts/auth";

export function Note() {
    const Auth = useContext(AuthContext);

    return (
        <>
            {Auth.signed ?
                <><NoteCard /></> :
                <p>Não Autorizado! Faça login para ter acesso...</p>
            }
        </>
    )
}