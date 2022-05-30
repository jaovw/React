import React from "react";

import Card from "./components/layout/Card";
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import NotasAlunos from './components/basic/NotasAlunos'
import Fragmento from './components/basic/Fragmento'
import Aleatorio from "./components/basic/Aleatorio"

export default _ =>
    <div>
        <h1>Fundamentos React</h1>
        <Card titulo='#05 - Número Aleatório'>
            <Aleatorio
                max = {20}
                min = {5}
            />
        </Card>
        <Card titulo='#04 - Fragmento'>
            <Fragmento />
        </Card>
        <Card titulo='#03 - Utilizando Paramentros'>
            <NotasAlunos
                titulo='Boletim'
                aluno='Joao'
                nota={9.0}
            />
        </Card>
        <Card titulo='#02 - Utilizando Parametros'>
            <ComParametro
                titulo='Utilizando props'
                subtitulo='Muito bem!'
            />
        </Card>
        <Primeiro></Primeiro>
    </div>

