import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button(props){
    return(
        <div>
            {props.started ?
                <button  className = 'Stop'  onClick = {(e)=>{props.handleStop(e)}}> 
                    <FontAwesomeIcon icon="stop" size = '5x'/>
                </button>
                :<button className = 'Play' onClick = {(e)=>props.handleStart(e)} disabled = {props.disableButton}> 
                    <FontAwesomeIcon icon="play" size = '5x'/>
                </button>
            }
        </div>
    )
}

export default Button

//<i class="fas fa-stop"></i>