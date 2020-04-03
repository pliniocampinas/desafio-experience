import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserGrid from './components/UserGrid/UserGrid';
import NavBarCustom from './components/NavBar/NavBarCustom';
import ClienteForm from './components/ClienteForm/ClienteForm';
import ClienteGrid from './components/ClienteGrid/ClienteGrid';
import HomePage from './components/HomePage/HomePage';



class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: ''
    };
  }

  Inicio() {
    return (
      <HomePage />
    );
  } 
  
  Register() {
    return (
      <UserForm />
    );
  } 
  
  Clientes() {
    return (
      <ClienteGrid />
    );
  } 
  
  Usuarios() {
    return (
      <UserGrid />
    );
  }
  
  CadastroCliente() {
    return (
      <ClienteForm />
    );
  } 

  render() {

    const onLogin = (userLogin) => {
      this.setState({
                    loggedIn: true,
                    username: userLogin
                  });
    }

    const onLogout = () => {
      this.setState({
                    loggedIn: false,
                    username: ''
                  });
    }

    const Login = () => {
      return (
        <LoginForm onLogin={onLogin}/>
      );
    }

    return ( 
      <Router>
      <div className="App">
        <NavBarCustom username={this.state.username} 
                      loggedIn={this.state.loggedIn}
                      onLogout={onLogout} />
        <div className="Container">
          <Route exact path="/" component={this.state.loggedIn? this.Inicio:Login} />
          <Route path="/login" component={Login} />
          <Route path="/registrar" component={this.Register} />
          <Route path="/clientes" component={this.state.loggedIn? this.Clientes: Login} />
          <Route path="/usuarios" component={this.state.loggedIn? this.Usuarios: Login} />
          <Route path="/cadastrar-cliente" component={this.state.loggedIn? this.CadastroCliente: Login} />
        </div>
  
      </div>
      </Router>
    );
  }
}

export default App;
