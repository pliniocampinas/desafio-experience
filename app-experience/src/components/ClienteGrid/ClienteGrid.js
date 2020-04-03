import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ClienteGrid.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
const url = 'http://127.0.0.1:4000';

const columns = [
    {
        name: 'Nome',
        selector: 'nomeCompleto',
        sortable: true,
    },
    {
        name: 'CPF',
        selector: 'cpf',
        sortable: true,
    },
    {
        name: 'Endereço',
        selector: 'endereco',
        sortable: true,
    },
    {
        name: 'Telefone',
        selector: 'telefone',
        sortable: true,
    },
  ];

class ClienteGrid extends Component {

    constructor() {
        super()
        this.state = {data: [] };
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        axios.get(`${url}/clientes`)
        .then( (response) => {
            console.log("response");
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

	render() {
		return (
			<div className="clientes">
				    <Link to="/cadastrar-cliente"><button className="BotaoCadastrar"> Cadastrar Cliente </button></Link>
                    <DataTable
                        title="Lista de Clientes"
                        columns={columns}
                        data={this.state.data}
                        defaultSortField="nomeCompleto"
                    />
				<Link to="/">Voltar</Link>
			</div>
		);
	}
}

export default ClienteGrid;