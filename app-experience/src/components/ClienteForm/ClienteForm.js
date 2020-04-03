import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ClienteForm.css';
import axios from 'axios';
const url = 'http://127.0.0.1:4000';

class ClienteForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nomeCompleto: '',
			cpf: '',
			endereco: '',
			telefone: ''
		};

		this.update = this.update.bind(this);

		this.Submit = this.Submit.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	Submit(e) {
		e.preventDefault();
		console.log(this.state);
		axios.post(`${url}/clientes/cadastrar`,
					this.state,
					{ headers: { 'Content-Type': 'application/json' } })
        .then( (response) => {
			console.log(response);
			this.setState({
				nomeCompleto: '',
				cpf: '',
				endereco: '',
				telefone: ''
			});
        });
	}

	render() {
		return (
			<div className="cliente">
				<form onSubmit={this.Submit}>
					<h2>Cadastrar Cliente</h2>

					<div className="nome">
						<input
							type="text"
							placeholder="Nome Completo"
							name="nomeCompleto"
							value={this.state.nomeCompleto}
							onChange={this.update}
						/>
					</div>

					<div className="cpf">
						<input
							type="text"
							placeholder="Digite seu CPF"
							name="cpf"
							value={this.state.cpf}
							onChange={this.update}
						/>
					</div>

                    <div className="endereco">
						<input
							type="text"
							placeholder="Endereço"
							name="endereco"
							value={this.state.endereco}
							onChange={this.update}
						/>
					</div>

                    <div className="telefone">
						<input
							type="text"
							placeholder="Telefone: (00) 99999-9999"
							name="telefone"
							value={this.state.telefone}
							onChange={this.update}
						/>
					</div>

					<input type="submit" value="Confirmar"/>
				</form>

				<Link to="/clientes">Voltar</Link>
			</div>
		);
	}
}

export default ClienteForm;