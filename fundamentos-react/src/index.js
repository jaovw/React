import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { Primeiro } from './components/basic/Primeiro'

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
     <Primeiro></Primeiro>,
     el
 )