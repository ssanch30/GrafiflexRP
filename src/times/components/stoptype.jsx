import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function StopType(props){
    return(
        <div className = 'dd-wrapper'>
            <div className = 'dd-header' type='button' onClick = {props.openDropdown}>
                <div className = 'dd-header-title'>{props.headerTitle}</div>
                {
                    props.listOpen 
                    ? <FontAwesome name="angle-up" size="2x" aria-hidden="false"/>
                    : <FontAwesome name="angle-down" size="2x"/>
                }
            </div>
         
            {
                props.listOpen && <ul className='dd-list'>
                {
                    props.typeList.map((item) =>(
                        <li className="dd-list-item" key = {item.id} onClick={()=>props.onSelection(item.id)}>
                            {item.id}. {item.type}
                        </li>
                        )
                    )
                }
                </ul>
            }
            {
                props.showDescription && 
                <div className = 'dd-description'>
                     <span><FontAwesomeIcon icon="info-circle"/></span>
                    <div >{props.description}</div>
                </div>
            }
        </div>

    )
}

export default StopType