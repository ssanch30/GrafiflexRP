import React from 'react'
import "./timeStyle.css"

class Comments extends React.Component{
    componentWillReceiveProps(props){
        if(this.props.unselect !== props.unselect){
            this.refs.ta.value = ''
        }
    }
    
    render(){
       
        return(
            <div className = "Comments">
                <h3># de OP y Comentarios</h3>
                <textarea type="text" cols = "40" rows="4" onBlur={this.props.onBlur} ref='ta' />
            </div>
        )
    }
}

export default Comments 