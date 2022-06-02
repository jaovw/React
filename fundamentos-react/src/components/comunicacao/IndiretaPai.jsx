import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    function info(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }
    return (
        <div>
           Pai
           <IndiretaFilho quandoClicar={info}/>
        </div>
    )
}