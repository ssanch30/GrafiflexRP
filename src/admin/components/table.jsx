import React, {Component} from 'react'
import TableSample from './tablesample.jsx'

class Table extends Component{
    render (){
    return(
        <TableSample stops = {this.props.stops}/> 
    )
}
}

export default Table