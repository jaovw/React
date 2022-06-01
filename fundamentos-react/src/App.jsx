import "./App.css"
import React from "react";

import Card from "./components/layout/Card";
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import NotasAlunos from './components/basic/NotasAlunos'
import Fragmento from './components/basic/Fragmento'
import Aleatorio from "./components/basic/Aleatorio"
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo='#08 - Lista de produtos' color='#a024ff'>
                <TabelaProdutos/>
            </Card>

        </div>
        <div className="Cards">
            <Card titulo='#07 - Repetição' color='#00adad'>
                <ListaAlunos/>
            </Card>

        </div>
        <div className="Cards">
            <Card titulo='#06 - Componentes com filhos' color='#adad00'>
                <Familia sobrenome='Santos'>
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Gustavo' />
                </Familia>


            </Card>

            <Card titulo='#05 - Número Aleatório' color='#080'>
                <Aleatorio
                    max={20}
                    min={5}
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


    </div>

