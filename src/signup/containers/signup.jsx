import React, {Component}from 'react'
import SignupLayout from '../components/signup-layout.jsx'
import UserCreatedLayout from '../components/user-created.jsx'

 import gql from 'graphql-tag'
 import {graphql} from 'react-apollo'

// const CursosQuery = gql `
// mutation CursosQuery {
//   cursos {
//       titulo
//       profesor{
//           nombre
//       }
//   }
// }
// `




const ADD_USER = gql`
mutation AddUser($user: NewUser!){
    userAdd(user:$user){
        name
    }
  }
`

class Signup extends Component {


    state = {
        name: '',
        lastname: '',
        username: '',
        password: '',
        password2:'',
        department: 0,
        formErrors:{
            name:'',
            lastname:'',
            password:'',
            password2:'',
            department:'',
        },
        validDept: false,
        valid:{
            form:false,
            name:false,
            lastname:false,
            password:false,
            password2:false,
        },
        userCreated: false,
        didCreate: {err:'',
                    value:false }
    }

    handleUserInput = (e) =>{
        
        const namee = e.target.name
        const value = e.target.value
        this.setState({[namee]: value},()=>{this.validateField(namee,value)})
      }

    handleDeptSelection = (id)=>{
        this.setState ({
           department: id,
           validDept:true,
        },this.validateForm)}

   handleSubmit = e=>{
        e.preventDefault()
        let name = e.target.elements.name.value.toLowerCase()
        let lastname = e.target.elements.lastname.value.toLowerCase()
        let password1 = parseInt(e.target.elements.password.value,10)
        this.setState({
            name,
            lastname,
            username: name + '.' + lastname,
            password:password1,
        },()=>{this.createUser()})

        //console.log(name, lastname, password1, password2, department)
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.valid.name;
        let lastnameValid = this.state.valid.lastname
        let passwordValid = this.state.valid.password;
        let password2Valid = this.state.valid.password2;
 

        switch(fieldName) {
            case 'name':
                nameValid = value.match(/^([a-zA-Z]+)$/) !== null;
                fieldValidationErrors.name = nameValid ? '' : ' es inválido';
                break;
            case 'lastname':
                lastnameValid = value.match(/^[a-zA-Z]+$/i) !== null;
                fieldValidationErrors.lastname = lastnameValid ? '' : ' es inválido';
                break;
            case 'password':
                passwordValid = value.length === 4;
                passwordValid = value.match(/^\d{4}$/) !== null;
                fieldValidationErrors.password = passwordValid ? '': ' debe ser un valor numérico de 4 digitos';
                
                break;
            case 'password2':
                password2Valid = (this.state.password===value)                
                fieldValidationErrors.password2 = password2Valid ? '' : 'Las contraseñas deben coincidir'
                break;
            default:
                break;
            }
        this.setState({formErrors: fieldValidationErrors,
                        valid:{
                            name: nameValid,
                            lastname:lastnameValid,
                            password:passwordValid,
                            password2:password2Valid   
                        }
                      },this.validateForm);
      }
      
      validateForm= ()=> {
        let valid = this.state.valid
        if(valid.name&&valid.lastname&&valid.password&&valid.password2&&this.state.validDept){
            this.setState({valid:{form:true}})
                                }
      }

    createUser = async ()=>{
        const{
            name,
            lastname,
            username,
            password,
            department,
        } = this.state
        try{
            await this.props.AddUser({
                variables:{
                    user:{
                        name,
                        lastname,
                        username,
                        password,
                        dept_id:department
                        }
                    }
                }).then(this.setState({userCreated:true,
                                        didCreate:{
                                                    err:'',
                                                    value:true
                                                    },
                                    
                                        }
                                ))
        }
        catch(e){
            console.log(e.message)
            this.setState({
                            userCreated: true,
                            didCreate: {err: e,
                                        value: false
                                }
                                    }
                                )
                }                                
    }

    createNew = () => {
        this.setState({
            name: '',
            lastname: '',
            username: '',
            password: '',
            department: 0,
            userCreated: false, 
        })
    }
   
    render(){
        return(
    
        this.state.userCreated ?
            <UserCreatedLayout
                username = {this.state.username}
                onClick = {this.createNew}
                didCreate={this.state.didCreate}
            />
            :
            
            <SignupLayout
                handleSelection = { id => this.handleDeptSelection (id)}
                onSubmit = {this.handleSubmit}
                disableButton = {!this.state.valid.form}
                formErrors = {this.state.formErrors}
                valid = {this.state.valid}
                handleUserInput ={ (e)=>this.handleUserInput(e)}
            />
   

        )
    }
}
export default graphql(ADD_USER,{name:'AddUser'})(Signup)