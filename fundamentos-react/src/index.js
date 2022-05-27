import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import  Primeiro  from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import NotasAlunos from './components/basic/NotasAlunos'

const el = document.getElementById('root')

const tag = <strong>Hello React!</strong>

// ReactDOM.render(<div>Hello World</div>,el)     //  JSX  -> NECESSITAMDO O IMPORT 'react'
/*
ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
)
*/
 ReactDOM.render(
     <div>
         <Primeiro></Primeiro>
         <ComParametro
            titulo = 'Utilizando props' 
            subtitulo='Muito bem!'/>
        <NotasAlunos
            titulo = 'Boletim'
            aluno  = 'Joao'
            nota = { 9.0 }
        />
        
     </div>
     ,
     el
 )