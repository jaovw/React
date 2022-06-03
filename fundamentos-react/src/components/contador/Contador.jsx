import "./Contador.css"
import React, {Component} from "react";

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

    setPasso = (e) => {
        this.setState({
            passo: + e.target.value
        })
    }

    render() {
        
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        type="number" 
                        id="passoInput" 
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div>
        )
    }
}

export default Contador