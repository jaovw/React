import React from "react";


export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const geraBool = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('João', gerarIdade(), geraBool())}>
                Fornecer Informações
            </button>
        </div>
    )
}