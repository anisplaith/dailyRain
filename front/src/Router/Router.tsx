import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from '../Contexts/auth';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Editor } from '../pages/Editor';
import { Note } from '../pages/Note';
import { UpdateEditor } from '../pages/UpdateEditor';

export function Router (){
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element = {<Login/>}/>
                    <Route path='/cadastro' element = {<Register/>}/>
                    <Route path='/home' element = {<Home/>}/>
                    <Route path='/editor' element = {<Editor/>}/>
                    <Route path='/abrirNota' element = {<Note/>}/>
                    <Route path='/atualizar' element = {<UpdateEditor/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
