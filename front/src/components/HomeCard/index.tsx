import { useEffect, useState } from "react";
import UserNotesService from "../../services/UserNotesService";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../services/UserService";

import { CloudButton } from "../CloudButton";
import { NotesList } from "../NotesList";
import { ContainerHome, ContainerHomeMobile, HomeText, LeftDivHome, LogOut, NotesHomeDiv } from "./style";
import LogOutImage from '../../assets/Logout.svg'

interface NotesData {
    id: number
    title: string
    content: string
    cover: string
}

export function HomeCard() {
    const navigate = useNavigate();

    var UserName = localStorage.getItem('userName')
    var token = localStorage.getItem('token');

    const [notesList, setNotesList] = useState<NotesData[]>([])

    const getUserNotes = () => {
        if (token) {
            UserNotesService.UserNotes(token).then(res => {
                setNotesList(res?.data.Notes)
                console.log(res?.data.Notes)
            }).catch(e => console.log(e))
        }
    }
    useEffect(() => {
        getUserNotes();
        if (token) {
            UserService.getDetails(token).then(res => {
                const { payload, user } = res?.data
                localStorage.setItem('UserId', payload.sub);
                localStorage.setItem('userName', user.name);
            })
        }
    }, [])

    const openNote = (id: number) => {
        localStorage.setItem('noteId', id.toString());
        navigate('/abrirNota');
    }

    return (
        <>
            <ContainerHome>
                <LeftDivHome>
                    <HomeText>
                        <LogOut
                            src={LogOutImage}
                            onClick={() => navigate('/')}
                        />
                        Seja muito bem-vinda (o), {UserName}! ✨
                    </HomeText>
                    <NotesHomeDiv>
                        {notesList ? (
                            notesList?.map((item) => (
                                <NotesList
                                    key={item.id}
                                    url={item.cover}
                                    title={item.title}
                                    onClick={() => openNote(item.id)}
                                />
                            )).reverse()) :
                            ''
                        }
                    </NotesHomeDiv>
                </LeftDivHome>
                <CloudButton onClick={() => navigate('/editor')} />
            </ContainerHome>

            {/* Versão mobile */}
            <ContainerHomeMobile>

                <LogOut
                    src={LogOutImage}
                    onClick={() => navigate('/')}
                />
                <CloudButton onClick={() => navigate('/editor')} />

                <HomeText>
                    Seja muito bem-vinda (o), rayane! ✨
                </HomeText>
                <NotesHomeDiv>
                    { notesList? (
                        notesList.map((item) => (
                            <NotesList
                                key={item.id}
                                url={item.cover}
                                title={item.title}
                                onClick={() => openNote(item.id)}
                            />
                        )).reverse()) :
                        ''
                    }
                </NotesHomeDiv>


            </ContainerHomeMobile>


        </>

    )
}