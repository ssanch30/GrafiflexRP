import React from 'react'
import './Form.css'



function LoginLayout(props){
    return(
        <form className = 'Form' onSubmit={props.checkUser}>
        {props.wrongUser&&<p style = {{color:'red'}}>El usuario o la constraseeña no son correctos</p>}
            <h2>
                Usuario:
            </h2>
            <input 
                type="text"
                name="username"
                id="user"
                placeholder = 'Ingrese su nombre de usuario'/>
                
            <h2>
                Constaseña:
            </h2>
            <input
                type="password"
                name="psw"
                id="password"
                placeholder='Ingrese su contaseña'/>
                
            <input 
                type="submit" 
                value="Iniciar Sesión"
            />
        </form> 
        )
    }           
    export default LoginLayout   