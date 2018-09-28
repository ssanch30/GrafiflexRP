import React from 'react'
import './signup-style.css'

const UserCreatedLayout  = (props)=>{
    return(

    
    <div className = 'NewUser'>
    {props.didCreate.value  ?
        <div>
            <h2>Usuario Creado</h2>
            <div>
                <h3>Nombre de usuario</h3>
                <p>{props.username}</p>
            </div>        

        </div>: 
        <div style ={{margin : 'auto'}}>
            <h2 style = {{color:'red'}}>
                El Usuario no pudo ser creado debido a un error en la conexión con el servidor, intente nuevamente<br/>
            
            </h2>
            <p>[Error: &nbsp; {props.didCreate.err.message}]</p>
        </div>
    }
                <input 
                type="button" 
                value = 'Crear Nuevo Usuario'
                onClick = {props.onClick}
            />
</div>
)
}

export default UserCreatedLayout