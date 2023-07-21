import { useEffect, useState } from "react"
import UserNotesService from "../../services/UserNotesService"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../pages/Editor/style";
import { LogOut } from "../HomeCard/style";
import { NoteContainer, NotePage, TrashButton } from "./styled";
import LogOutImage from '../../assets/Logout.svg'
import TrashIcon from '../../assets/Trash.svg'
import EditIcon from '../../assets/Edit.svg'
import { Div } from "../../pages/Editor/style";

export function NoteCard() {
    const [content, setContent] = useState<any>()
    var token = localStorage.getItem('token');
    var id = Number(localStorage.getItem('noteId'))

    const navigate = useNavigate()
    const navigateTimer = () => setTimeout(() => navigate('/home'), 1500);

    const getContentNote = () => {

        if (token && id) {
            UserNotesService.getNote(token, id).then(res => {
                const data = res?.data;
                setContent(data.note.content)
            })
        }
    }
    useEffect(() => {
        getContentNote()
    }, [])

    const handleDeleteNote = () => {
        if (token && id) {
            UserNotesService.deleteNote(token, id).then(res => {
                toast.dark('Anotação deletada com sucesso!', { autoClose: 1000 })
                navigateTimer();
            })
        }
    }

    return (
        <NotePage>
            <Div style={{
                justifyContent: 'space-between',
                width: '96%',
                paddingTop: '30px'
            }}>
                <LogOut
                    src={LogOutImage}
                    style={{ top: 0, padding: 0, paddingLeft: '5px' }}
                    onClick={() => navigate('/home')}
                />
                <div style={{ display: 'flex', gap: '15px' }}>
                    <TrashButton src={EditIcon} onClick={() => navigate('/atualizar')} />
                    <TrashButton src={TrashIcon} onClick={handleDeleteNote} />

                </div>


            </Div>
            <NoteContainer dangerouslySetInnerHTML={{ __html: content }} />

            <ToastContainer />
        </NotePage>
    )
}