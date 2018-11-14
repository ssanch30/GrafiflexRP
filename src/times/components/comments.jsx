import React from 'react'
import "./timeStyle.css"

function Comments(props){
    return(
        <div className = "Comments">
            <h3># de OP y Comentarios</h3>
            <textarea type="text" cols = "40" rows="4" onBlur={props.onBlur}/>
        </div>
    )
}

export default Comments 