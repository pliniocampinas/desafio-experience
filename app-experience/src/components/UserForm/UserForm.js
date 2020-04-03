import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css';
import axios from 'axios';
const url = 'http://127.0.0.1:4000';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			telefone: '',
			senha: ''
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
		axios.post(`${url}/usuarios/cadastrar`,
					this.state,
					{ headers: { 'Content-Type': 'application/json' } })
        .then( (response) => {
			console.log(response);
			this.setState({
				username: '',
				email: '',
				telefone: '',
				senha: ''
			});
        });
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.Submit}>
					<h2>Registrar</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Nome de Usuário"
							name="username"
							value={this.state.username}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Entre seu email"
							name="email"
							value={this.state.email}
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

					<div className="password">
						<input
							type="password"
							placeholder="Senha"
							name="senha"
							value={this.state.senha}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirme sua senha" name="password1" />
					</div>

					<input type="submit" value="Confirmar" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default UserForm;