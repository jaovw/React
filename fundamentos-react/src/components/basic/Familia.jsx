import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
            //  UTILIZANDO O SPREAD OPERATOR PARA PEGAR TODAS AS PROPS (PARAMETROS)
        <div>
            <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}/>
            <FamiliaMembro nome='Ana' {...props}/>
            <FamiliaMembro nome='Gustavo' sobrenome='Silva'/>
        </div>
    )
}