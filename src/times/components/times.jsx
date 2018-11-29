import React from 'react'
import './timeStyle.css'
import Comments from './comments'
import StartStop from './button.jsx'
import StopContainer from '../containers/stoptype-container.jsx'
import Timer from '../containers/timer'


function Times (props){
    
    return(
        <div className = "Time">
            <div className = "Credentials">
                <p id="user"><b>Usuario:</b> {props.user}</p>
                <p>Seleccione el tipo de parada e inicie el contador</p>
            </div>
            <div className = "TimesWrapper">
                <StopContainer
                    headerTitle = {props.headerTitle}
                    list = {props.list}
                    handleSelection = {(id)=>props.handleSelection(id)}
                    user = {props.user}
                    user_id = {props.user_id}
                    dept_id = {props.dept_id}
                    unselect = {props.unselect}
                />
                <Comments className = "Comments" 
                            onBlur = {props.storeComment}
                            unselect = {props.unselect}/> 
                <StartStop  className = "Start-stop" 
                    started = {props.started}
                    handleStart = {(e)=>props.handleStart(e)}
                    disableButton = {props.disableButton}
                    handleStop = {(e)=>props.handleStop(e)}
                />
            </div>
            <div>
                {
                    props.started && 
                    <Timer storeStop = {(min,sec)=>props.storeStop(min,sec)}/>
                    
                }
            </div>{
            props.stopCreated&&
            <div className='Success'>Parada guardada</div>
            }
        </div>
    )
    
}
export default Times 