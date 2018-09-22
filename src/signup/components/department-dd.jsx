import React from 'react'
import FontAwesome from 'react-fontawesome'
import './signup-style.css'



function  firstUpper(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Departments (props){
    return(
        <div className = 'd-wrapper'>
            <div className = 'd-header' type='button' onClick = {props.openDropdown}>
                <div className = 'd-header-title'>{props.headerTitle}</div>
                {
                    props.listOpen 
                    ? <FontAwesome name="angle-up" size="2x" aria-hidden="false"/>
                    : <FontAwesome name="angle-down" size="2x"/>
                }
            </div>
         
            {
                props.listOpen && <ul className='d-list'>
                {
                    props.ddList.map((item) =>(
                        <li
                            className="d-list-item"
                            key = {item.id} 
                            onClick={()=>props.onSelection(item.id)}
                            >
                            {item.id}. {firstUpper(item.name)}
                        </li>
                        )
                    )
                }
                </ul>
            }

        </div>

    )
}

export default Departments
