import React from "react";

export default props => {
    return (    //  FORMA RESUMIDA DE FRAGMENT <> </> | SEM POSSIBILIDADE DE ATRIBUTOS
        <React.Fragment key='1'>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p> 
        </React.Fragment>
    )
}