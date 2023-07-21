import { TrashButton } from "../NoteCard/styled";
import { Div, Notes, NotesDiv, Title } from "./style";
import TrashIcon from '../../assets/Trash.svg'

interface CoverUrl {
    url: string
    title: string
    onClick?: any
}
export function NotesList({ url, title, onClick }: CoverUrl) {

    return (
        <NotesDiv onClick={onClick}>
            <Notes src={url} />
            <Div>
                <Title>{title}</Title>
            </Div>
        </NotesDiv>
    )

}