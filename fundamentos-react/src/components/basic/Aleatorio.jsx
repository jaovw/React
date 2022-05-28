import React from "react"

export default props => {
    const numero = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <>
        <h2>Numero aleatório:</h2>
        <p>{ numero }</p>
        </>
    )
}