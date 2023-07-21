import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css'
import { Div, TitleInput, PageEditor, Button } from "../../pages/Editor/style";
import { LogOut } from "../HomeCard/style";
import LogOutImage from '../../assets/Logout.svg'

export class EditorCard extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    title: '', 
    readOnly: false
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  onTitleStateChange = (title) => {
    const { editorState } = this.state;
    this.setState({
      title: title
    })
  }

  render() {
    const { editorState, readOnly } = this.state;

    const onSubmit = () => {
      if (this.state.title) {
        const data = {
          title: this.state.title,
          content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          UserId: localStorage.getItem('UserId')
        }
        toast.dark('Aguarde ou tente clicar várias vezes...', {autoClose: 3000})
        api.post('/notes', data).then(res => {
          toast.dark('Salvo com sucesso!', {autoClose: 1000})
          this.setState({
            readOnly: true,
          })
        })
      } else { toast.error('Adicione um título para salvar! ✍🏽', {autoClose: 2500}) }
    }

    return (
      <PageEditor>
        <Div style={{ justifyContent: 'space-between' }}>
          <Div>
            <Link to={'/home'}>
              <LogOut
                src={LogOutImage}
                style={{ top: 0, padding: 0, paddingLeft: '5px' }}
              />
            </Link>
            <TitleInput
              maxLength={60}
              placeholder='Digite um título...'
              onChange={(event) => this.onTitleStateChange(event.target.value)}
            />
          </Div>
          <Button onClick={onSubmit}>Salvar</Button>
        </Div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          readOnly = {readOnly}
        />
        <ToastContainer />
      </PageEditor>
    )
  }
}
