import React from 'react'
import './Button.css'
import FontAwesome from 'react-fontawesome'


function Button(props){
    return(
        <div>
            {props.started ?
                <button  className = 'Stop'  onClick = {(e)=>{props.handleStop(e)}}> 
                    <FontAwesome name="stop" size="5x" aria-hidden="false" /> 
                </button>
                :<button className = 'Play' onClick = {(e)=>props.handleStart(e)} disabled = {props.disableButton}> 
                    <FontAwesome name="play" size="5x" aria-hidden="false"/>
                </button>
            }
        </div>
    )
}

export default Button

//<i class="fas fa-stop"></i>