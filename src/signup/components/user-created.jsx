import React from 'react'
import './signup-style.css'

const UserCreatedLayout  = (props)=>{
    return(

    
    <div className = 'NewUser'>
        <h2>Usuario Creado</h2>
        <div>
            <h3>Nombre de usuario</h3>
            <p>{props.username}</p>
        </div>        
        <input 
            type="button" 
            value = 'Crear Nuevo Usuario'
            onClick = {props.onClick}
        />
</div>
)
}

export default UserCreatedLayout