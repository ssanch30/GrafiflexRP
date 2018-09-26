import React, {Component}from 'react'
import './signup-style.css'
import DropDown from '../containers/dept-list-container.jsx'
import FormErrors from './FromErrors'

class SignupLayout extends Component {

    render(){
        return(
 
            <form className='signup-form' onSubmit = {this.props.onSubmit}>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.props.formErrors} />
                </div>
                <div className = 'info-group'>
                    <div>
                        <div className="group">
                            <h3>Nombre:</h3>
                            <input  type='text' 
                                    name = 'name'
                                    autoComplete="off"
                                    onBlur={(event) => this.props.handleUserInput(event)}
                                    />
                        </div>
                        <div className="group">
                            <h3>Apellido:</h3>
                            <input type="text" name = 'lastname' autoComplete="off"/>
                        </div>
                    </div>    
                    <hr/>
                    <div>
                        <div className="group">
                            <h3>Contraseña:</h3>
                            <input type="password" name = 'password' autoComplete="off"/>
                        </div>
                        <div className="group">
                            <h3>Repita la<br/> Contraseña:</h3>
                            <input type="password" name = 'password2' autoComplete="off"/>
                        </div>
                    </div>
                </div>
                <div className="group">
                            <DropDown
                                headerTitle = "Seleccione Departamento" 
                                handleSelection ={this.props.handleSelection}
                                />
                        </div>
                <input disabled = {this.props.disableButton} type= "submit" value='Crear Usuario' onSubmit = {this.props.onSubmit}/>
          
                
            </form>
        )
    }
}
export default SignupLayout