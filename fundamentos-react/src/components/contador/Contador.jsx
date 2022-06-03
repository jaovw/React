import "./Contador.css"
import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import Formulario from "./Formulario";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInical || 5
    }

    // FORMA MAIS COMPLICADA DE AJUSTAR O ERRO DO THIS
    // constructor(props) {
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (setPasso) => {
        this.setState({
            passo: setPasso
        })
    }

    render() {

        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display
                    numero={this.state.numero}
                />
                <Formulario
                    passo={this.state.passo}
                    setPasso ={this.setPasso}
                />
                <Botoes
                    incrementar={this.inc}
                    decrementar={this.dec}
                />
            </div>
        )
    }
}

export default Contador