import React from "react"

export default props => {
    // const numero = Math.floor(Math.random() * (props.max - props.min) + props.min)
    const {min, max} = props
    const numero = Math.floor(Math.random() * (max - min) + min)

    return (
        <>
        <h2>Numero aleatório:</h2>
        <p>
            <strong>Valor maximo: {max}</strong>
        </p>
        <p>
            <strong>Valor minimo: {min}</strong>
        </p>
        <p>
            <strong>Valor sorteado: {numero}</strong>
        </p>
        </>
    )
}