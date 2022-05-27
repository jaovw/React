import React from 'react'

export default (props) => { // PROPRIEDADES DO COMPONENT
    return(
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.subtitulo }</p>
        </div>
    )
}