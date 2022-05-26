import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const el = document.getElementById('root')

const tag = <strong>Hello React!</strong>

// ReactDOM.render(<div>Hello World</div>,el)     //  JSX  -> NECESSITAMDO O IMPORT 'react'

ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
)