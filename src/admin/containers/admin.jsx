import React, {Component} from 'react'
import Filters from '../components/filters.jsx'
import Table from '../components/table.jsx'
import Export from '../components/export.jsx'
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
const firstCharToUpper = (string)=>{
    return string.replace(/\b(\w)/g, c=>c.toUpperCase());
}
class Admin extends Component {
    render (){
        if (this.props.data.loading) return <h1>Cargando...</h1>
        const {stops} = this.props.data;
        return(
            <div>
                <Filters/>
                <Table stops = {stops}/>
                <Export/>
            </div>
                )
                
            }
        }
        
        export default graphql(GET_STOPS)(Admin)