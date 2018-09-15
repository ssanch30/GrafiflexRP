
import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

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

class TestDB extends Component{
    render(){
    if (this.props.data.loading) return <h1>Cargando...</h1>
    const {cursos} = this.props.data;
    
    return(
        <div>
        {
         cursos.map(curso=> (
          <div>
          <h1>Prueba de Carga desde base de datos</h1>
          <h3>Curso: {curso.titulo}</h3>
          <p> {curso.description}</p>
          <p>Profesor: {curso.profesor.nombre}</p>
          <hr/>
        </div>
                )
            )
        }
        </div>

    
        )
    }
}



export default graphql(CursosQuery)(TestDB)