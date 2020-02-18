import React, { Component } from "react";
import api from '../../services/api'

import { Link } from 'react-router-dom'

import './style.css'
export default class Main extends Component {
    state = {
    }

    componentDidMount() {
    }
    render() {
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