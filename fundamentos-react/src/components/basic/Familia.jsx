import React, { cloneElement } from "react";

export default props => {
    return (
            
        <div>
            {/* {React.cloneElement(props.children,{ ...props })} CASO SEJA APENAS UM ELEMENTO*/}
            {
                React.Children.map(props.children, el =>{
                    return cloneElement(el,props)
                })
            }
            {/* DE FORMA RESUMIDA POREM CORRIGINDO ERRO DE KEY
                props.children.map((child,i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            */}
        </div>
    )
}