import React, { Component } from 'react';
import AppLayout from '../components/AppLayout'
import '../components/App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

library.add(faInfoCircle);



class App extends Component {
  render() {
    console.log(this.props)
    if (this.props.data.loading) return <h1>Cargando...</h1>
    const {cursos} = this.props.data;
    return (
      <div>
      <AppLayout/>   
      <div>
        {cursos.map(curso=> (
          <div>
          <h1>Prueba de Carga desde base de datos</h1>
          <h3>{curso.titulo}</h3>
          <p>{curso.description}</p>
          <hr/>
        <p>Profesor: {curso.profesor.nombre}</p>
        </div>
        ))}
      </div>
      </div>    
    );
  }
}

const CursosQuery = gql `
query CursosQuery {
  cursos {
      titulo
      profesor{
          nombre
      }
  }
}
`

export default graphql(CursosQuery)(App);
