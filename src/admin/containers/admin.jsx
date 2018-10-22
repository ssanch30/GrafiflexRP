import React, {Component} from 'react'
//import Filters from '../components/filters.jsx'
import Table from '../components/table.jsx'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const GET_STOPS = gql`
query getStops{ 
    stops{
        id
        user{name
            lastname
            department{dept_name}}
        stoptype{type}
        start
        stop
        minutes
        comment 
    }
}
`

class Admin extends Component {
    render (){
        if (this.props.data.loading) return <h1>Cargando...</h1>
        const {stops} = this.props.data;
        return(
            <div>
                <Table stops = {stops}/>
                
            </div>
                )
                
            }
        }
        
        export default graphql(GET_STOPS)(Admin)