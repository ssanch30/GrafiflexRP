import React, { Fragment } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'



function LoginLayout(props){
    return(
        <Fragment>
            <form className = 'Form' onSubmit={props.checkUser}>
            {props.wrongUser&&<p style = {{color:'red'}}>El usuario o la constraseña no son correctos</p>}
                <h2>
                    Usuario:
                </h2>
                <input 
                    type="text"
                    name="username"
                    id="user"
                    placeholder = 'Ingrese su nombre de usuario'/>
                    
                <h2>
                    Contraseña:
                </h2>
                <input
                    type="password"
                    name="psw"
                    id="password"
                    placeholder='Ingrese su contraseña'/>
                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    />
            </form>
            
            <Link to = '/signup' className = 'Link' > <b>Crear un Usuario Nuevo</b> </Link>
        </Fragment>

        )
    }           
    export default LoginLayout   