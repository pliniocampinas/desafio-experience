import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
const url = 'http://127.0.0.1:4000';


class HomePage extends Component {

    constructor() {
        super()
        this.state = {data: [] };
    }

	render() {
		return (
			<div className="clientes">
				    <Link to="/clientes"><button className="BotaoCadastros"> Visualizar Clientes </button></Link>
				    <Link to="/usuarios"><button className="BotaoCadastros"> Visualizar Usuários </button></Link>
			</div>
		);
	}
}

export default HomePage;