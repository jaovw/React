import React from "react";
import produtos from "../../data/produtos";

export default () => {

    const listaProdutos = produtos.map(produto => {
        return <th>{produto.nome}</th>
    })
    const listaPreco = produtos.map(produto => {
        return <th>{produto.preco}</th>
    })

    return (
        <div>
            <table>
                <td>
                    {listaProdutos}
                </td>
                <td>
                    {listaPreco}
                </td>

            </table>

        </div>
    )
}