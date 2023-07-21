import React, { Component, useEffect } from 'react';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import UserNotesService from "../../services/UserNotesService";
import htmlToDraft from 'html-to-draftjs';
import { Link } from "react-router-dom";

import { Button } from '../../pages/Editor/style';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TitleInput, PageEditor } from "../../pages/Editor/style";
import { LogOut } from "../HomeCard/style";
import { Div } from "../NotesList/style";
import LogOutImage from '../../assets/Logout.svg'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './style.css'

// variáveis globais
var token = localStorage.getItem('token');
//var UserId = localStorage.getItem('UserId');

export class UpdateEditorCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML('carregando...')
        )
      ),
      note: '',
      title: '',
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  getUserId = () =>  { var UserId = localStorage.getItem('UserId');}
  // seta o editorState com valor do conteúdo da anotação ao carregar a página
  componentDidMount() {
    var id = Number(localStorage.getItem('noteId'));
    if (token && id) {
      UserNotesService.getNote(token, id).then(res => {
        const data = res?.data;
        this.setState({
          editorState: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              htmlToDraft(data.note.content)
            )
          ),
          note: data.note
        })
      })
    }
  }
  onTitleStateChange = (title) => {
    this.setState({
      title: title
    })
  }

  render() {
    const { editorState, title, note } = this.state;

    const updateNote = () => {
      var id = Number(localStorage.getItem('noteId'));
      const data = {
        id: id,
        title: title ? title : note.title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        cover: note.cover,
        UserId: this.getUserId.UserId
      }

      if (token && id) {
        UserNotesService.updateNotes(token, id, data).then(res => {
          const data = res?.data;
          toast.dark('Anotação atualizada com sucesso!', { autoClose: 1000 })

        })
      }
    }

    return (
      <PageEditor style={{ alignItems: 'center', gap: 0 }}>
        <Div style={{ paddingBottom: '5px', height: 'max-content' }}>
          <Div style={{ justifyContent: 'flex-start' }}>
            <Link to={'/home'}>
              <LogOut
                src={LogOutImage}
                style={{ top: 0, padding: 0, paddingLeft: '5px' }}
              />
            </Link>
            <TitleInput
              maxLength={60}
              placeholder='Mudar título...'
              onChange={(event) => this.onTitleStateChange(event.target.value)}
            />
          </Div>
          <Button onClick={updateNote}>Atualizar</Button>
        </Div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <ToastContainer />
      </PageEditor>

    )
  }
}