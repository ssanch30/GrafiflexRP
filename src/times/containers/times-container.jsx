import React, {Component} from 'react';
import Times from '../components/times.jsx'
class TimesContainer extends Component{
    handleSelection = (id)=>{
        console.log(id)
    }
    render(){
        return(
            <Times 
                list = {this.props.list}
                handleSelection = {(id)=>this.handleSelection(id)}
            />
            

        )
    }
}

export default TimesContainer