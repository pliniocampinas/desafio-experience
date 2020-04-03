import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserGrid.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
const url = 'http://127.0.0.1:4000';

const columns = [
    {
        name: 'Usuário',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Telefone',
        selector: 'telefone',
        sortable: true,
    },
  ];

class UsuarioGrid extends Component {

    constructor() {
        super()
        this.state = {data: [] };
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        axios.get(`${url}/usuarios`)
        .then( (response) => {
            console.log("response");
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

	render() {
		return (
			<div className="usuarios">
				    <Link to="/registrar"><button className="BotaoCadastrar"> Cadastrar Usuário </button></Link>
                    <DataTable
                        title="Lista de Usuários"
                        columns={columns}
                        data={this.state.data}
                        defaultSortField="username"
                    />
				<Link to="/">Voltar</Link>
			</div>
		);
	}
}

export default UsuarioGrid;