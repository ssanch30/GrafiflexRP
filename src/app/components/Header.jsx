import React from 'react'
import './App.css';
import logo from '../../img/logoNegro.png';


function Header(props){
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' height='109px' width='314px' />
        <h1 className="App-title"> Registro de Paradas</h1>
    </header>
    )

}

export default Header