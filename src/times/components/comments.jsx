import React from 'react'
import "./timeStyle.css"

function Comments(props){
    return(
        <div className = "Comments">
            <h3>Comentarios</h3>
            <textarea type="text" cols = "40" rows="4" />
        </div>
    )
}

export default Comments 