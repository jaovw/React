import React, { useState } from "react";
import "./Mega.css"

const Mega = props => {

    function geraNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min

        return array.includes(aleatorio) ? geraNumeroNaoContido(min, max, array) : aleatorio
    }

    function geraNumeros(qtde) {
        const numeros = Array(qtde).fill(0).reduce(nums => {
            const novoNumero = geraNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    const [qtde, setQuantidade] = useState(props.qtdeNumeros || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (

        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor=""></label>
                <input
                    min='6'
                    max='12'
                    type="number"
                    value={qtde} 
                    onChange={e=> {
                        setQuantidade(+e.target.value)
                        setNumeros(geraNumeros(+e.target.value))
                    }}
                />
            </div>

            <button onClick={_ => setNumeros(geraNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}

export default Mega