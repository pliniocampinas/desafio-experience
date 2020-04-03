import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class SignInButton extends Component {

  render() {
    if(this.props.loggedIn) {
      return (<li className="SignInButton"><button onClick={this.props.onLogout}>Usuario: {this.props.username} (Logout)</button></li>);
    }
    else {
      return (<li className="SignInButton"><Link to="/">Login </Link></li>);
    }
  }
}

class NavBarCustom extends Component {

  render() {

    return (
      <div className="NavBarCustom">
        <ul> 
          <li><Link to="/">Inicio</Link></li> 
          <li><a href="http://github.com">Link Repositório</a></li> 
          <SignInButton loggedIn={this.props.loggedIn} username={this.props.username} onLogout={this.props.onLogout}/>
        </ul> 
      </div>

    );
  }
}

export default NavBarCustom;