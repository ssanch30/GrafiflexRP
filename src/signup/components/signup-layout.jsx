import React, {Component}from 'react'
import './signup-style.css'
import DropDown from '../containers/dept-list-container.jsx'


class SignupLayout extends Component {

    render(){
        return(
            <form className='signup-form'>
                <div className = 'info-group'>
                    <div>
                        <div className="group">
                            <h3>Nombre:</h3>
                            <input type='text'/>
                        </div>
                        <div className="group">
                            <h3>Apellido:</h3>
                            <input type="text"/>
                        </div>
                    </div>    
                    <hr/>
                    <div>
                        <div className="group">
                            <h3>Contraseña:</h3>
                            <input type="text"/>
                        </div>
                        <div className="group">
                            <h3>Repita la<br/> Contraseña:</h3>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div className="group">
                            <DropDown
                                headerTitle = "Seleccione Departamento" 
                                handleSelection ={this.props.handleSelection}
                                />
                        </div>
                <input type= "submit" value='Crear Usuario' onSubmit = {this.props.onSubmit}/>
    
                
            </form>
        )
    }
}
export default SignupLayout