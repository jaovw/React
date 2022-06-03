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
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

import Contador from "./components/contador/Contador"

import Mega from "./components/mega/Mega"

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo='#15 - Mega' color='#2424ff'>
                <Mega
                    numero={9}
                />
            </Card>

            <Card titulo='#14 - Contador' color='#dec8ab'>
                <Contador
                // numeroInicial = {} 
                />
            </Card>

            <Card titulo='#13 - Conponente controlado (Input)' color='#ff42a1'>
                <Input />
            </Card>

            <Card titulo='#12 - Comunicação indireta' color='#005700'>
                <IndiretaPai />
            </Card>

            <Card titulo='#11 - Comunicação direta' color='#651a1a'>
                <DiretaPai

                />
            </Card>

            <Card titulo='#10 - Condicional' color='#575700'>
                <UsuarioInfo
                    usuario={{ nome: 'João' }}
                />
                <UsuarioInfo
                    usuario={{ email: 'jo@ao.com' }}
                />
            </Card>

            <Card titulo='#09 - Renderização condicional' color='#005757'>
                <ParOuImpar
                    numero={5}
                />
            </Card>

            <Card titulo='#08 - Tabela de produtos' color='#a024ff'>
                <TabelaProdutos />
            </Card>

            <Card titulo='#07 - Repetição' color='#00adad'>
                <ListaAlunos />
            </Card>

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

