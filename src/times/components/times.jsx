import React from 'react'
import './timeStyle.css'
import Comments from './comments'
import StartStop from './icon.jsx'
import StopContainer from '../containers/stoptype-container.jsx'


function Times (props){
    return(
        <div className = "Time">
            <div>
                Seleccione el tipo de parada e inicie el contador:<br/>

                {props.user}+{props.dept_id}+{props.user_id}
            </div>
            <div className = "TimesWrapper">
                <StopContainer
                    headerTitle = "Tipo de Parada"
                    list = {props.list}
                    handleSelection = {(id)=>props.handleSelection(id)}
                    user = {props.user}
                    user_id = {props.user_id}
                    dept_id = {props.dept_id}
                /> 
                <Comments className = "Comments"/> 
            <StartStop  className = "Start-stop"/>
        </div>
        </div>
    )
    
}
export default Times 