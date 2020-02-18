import React, { Component } from "react";
import api from '../../services/api'

import { Link } from 'react-router-dom'

import './style.css'
export default class Main extends Component {
    state = {
        dividas: []
    }

    componentDidMount() {
        this.carregar()
    }
    carregar = async () => {
        try {
            const response = await api.get("/dividas")
            this.setState({ dividas: response.data })
        } catch (e) {
            alert(e.message)
        }

    }
    novaDivida = () => {

    }
    render() {
        return (
            <div>
                <h1> Você tem {this.state.dividas.length} Divida(s)</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Data de Pagamento</th>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Valor</th>
                            <th>Pago</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dividas.map(divida => (
                            <tr key={divida._id}>
                                <td>{divida.data}</td>
                                <td>{divida.dataPagamento ? divida.dataPagamento : ''}</td>
                                <td>{divida.pessoa}</td>
                                <td>{divida.descricao}</td>
                                <td>{divida.valorPagar}</td>
                                <td>{divida.valorPago ? divida.valorPago : ''}</td>
                                <td>{divida.total}</td>
                                <td><Link to={`/pay/${divida._id}`}>pagar</Link></td>
                                <td><Link to={`/schedule/${divida._id}`}>reagendar</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="button-container">
                    <Link to="/new" id="link">Nova Divida</Link>
                </div>
            </div>
        )
    }
}