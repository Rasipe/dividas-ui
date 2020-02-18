import React, { Component } from "react";
import api from '../../services/api'


import './style.css'

export default class Main extends Component {
    state = {
        divida: {},
        valor: 0,
        spanClass: 'pay-span',
        erro: ''
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        let divida = await api.get(`/dividas/${id}`)        
        this.setState({ divida: divida.data })

    }
    send = async (event) => {
        event.preventDefault();
        try {
            await api.put(`/dividas/pagar/${this.state.divida._id}`, {pagar: this.state.valor})
        } catch (error) {
            this.setState({spanClass: 'pay-span-error'})
            this.setState({erro: error.response.data})
        }
    }
    handleChange = (event) => {
        this.setState({valor: event.target.value})
    }
    render() {
        let { divida, spanClass, erro} = this.state
        return (
            <form id="pay-form">
                <span className={spanClass}>{erro}</span>
                <br/>
                <h2 id="payment"> {`${divida.descricao} - ${divida.pessoa}`} </h2>
                <br/>
                <label id="pay-field">
                    Valor
                    <input type="number" value={this.state.valor} onChange={this.handleChange}/>
                </label>
                <button type="submit" id="pay-button" onClick={this.send}> Pagar </button>
            </form>
        )
    }
}