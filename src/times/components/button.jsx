import React from 'react'

function Button(props){
    return(
        <div>
            {props.started ?
                <input type = 'button' value = 'Stop' onClick = {(e)=>{props.handleStop(e)}}/>
                :<input type='button' value='Start' onClick = {(e)=>props.handleStart(e)} disabled = {props.disableButton}/>
            }
        </div>
    )
}

export default Button