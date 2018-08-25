import React from 'react';
import './timeStyle.css';
import StopType from './stoptype.jsx'
import Comments from './comments'
import StartStop from './icon.jsx'

function Times (props){
    return(
        <div className = "Time">
            <StopType /> 
            <Comments /> 
            <StartStop />
        </div>
    )
    
}
export default Times 