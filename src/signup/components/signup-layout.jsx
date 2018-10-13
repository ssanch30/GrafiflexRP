import React, {Component}from 'react'
import './signup-style.css'
import DropDown from '../containers/dept-list-container.jsx'
import FormErrors from './FromErrors'
import FontAwesome from 'react-fontawesome'
//style={this.state.showMyComponent ? {} : { display: 'none' }}
class SignupLayout extends Component {

    render(){
        return(
 
            <form className='signup-form' onSubmit = {this.props.onSubmit}>
                <div className = 'info-group'>
                    <div>
                        <div className="group">
                            <h3>Nombre:</h3>
                            <input  type='text' 
                                    name = 'name'
                                    autoComplete="off"
                                    onBlur={(event) => this.props.handleUserInput(event)}
                                    />
                            <span><FontAwesome name="check-circle" size="2x" style={this.props.valid.name ? {color:'#56f442'}:{display: 'none'}}/>    </span>
                        </div>
                        <div className="group">
                            <h3>Apellido:</h3>
                            <input type="text" name = 'lastname' autoComplete="off"
                                onBlur={(event) => this.props.handleUserInput(event)}/>
                            <span><FontAwesome name="check-circle" size="2x" style={this.props.valid.lastname ? {color:'#56f442'}:{display: 'none'}}/>    </span>
                        </div>
                    </div>    
                    <hr/>
                    <div>
                        <div className="group">
                            <h3>Contraseña:</h3>
                            <input type="password" name = 'password' autoComplete="off"
                                onBlur={(event) => this.props.handleUserInput(event)}/>
                                <span><FontAwesome name="check-circle" size="2x" style={this.props.valid.password ? {color:'#56f442'}:{display: 'none'}}/>    </span>
                        </div>
                        <div className="group">
                            <h3>Repita la<br/> Contraseña:</h3>
                            <input type="password" name = 'password2' autoComplete="off"
                                onBlur={(event) => this.props.handleUserInput(event)}/>
                            <span><FontAwesome name="check-circle" size="2x" style={this.props.valid.password2 ? {color:'#56f442'}:{display: 'none'}}/>    </span>
                        </div>
                    </div>
                </div>
                <div className="group">
                            <DropDown
                                headerTitle = "Seleccione Departamento" 
                                handleSelection ={this.props.handleSelection}
                                />
                        </div>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.props.formErrors} />
                </div>
                <input disabled = {this.props.disableButton} type= "submit" value='Crear Usuario' onSubmit = {this.props.onSubmit}/>
          
                
            </form>
        )
    }
}
export default SignupLayout