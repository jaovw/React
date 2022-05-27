import React from "react";
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import NotasAlunos from './components/basic/NotasAlunos'
import Fragmento from './components/basic/Fragmento'

export default _ =>
    <div>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo='Utilizando props'
            subtitulo='Muito bem!'
        />
        <NotasAlunos
            titulo='Boletim'
            aluno='Joao'
            nota={9.0}
        />
        <Primeiro></Primeiro>
    </div>

