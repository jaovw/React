import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho
            texto='Filho 01'
            numero={123}
            bool={true}
            />
        </div>
    )
}