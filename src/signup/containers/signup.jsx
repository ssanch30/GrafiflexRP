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
        valid:{
            form:false,
            name:false,
            lastname:false,
            password:false,
            password2:false,
            department:false,
        },
        userCreated: false, 
    }

    handleUserInput = (e) =>{
        
        const namee = e.target.name
        const value = e.target.value
        console.log(namee,value)
        this.setState({[namee]: value},()=>{this.validateField(namee,value)})
      }

    handleDeptSelection = (id)=>{
       console.log(id)
       this.setState ({
           department: id,
           valid:{department:true}
       },()=>{this.validateForm}
        )}

   handleSubmit = e=>{
        e.preventDefault()
        let name = e.target.elements.name.value.toLowerCase()
        let lastname = e.target.elements.lastname.value.toLowerCase()
        let password1 = parseInt(e.target.elements.password.value,10)
        let password2 = e.target.elements.password2.value.toLowerCase()
        this.setState({
            username: name + '.' + lastname,
        },()=>{this.createUser()})

        //console.log(name, lastname, password1, password2, department)
    }

    validateField = (fieldName, value) => {
        console.log("dfgh")
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.valid.name;
        let lastnameValid = this.state.valid.lastname
        let passwordValid = this.state.valid.password;
        let password2Valid = this.state.valid.password2;
        var pass1
 

        switch(fieldName) {
            case 'name':
                nameValid = value.match(/^([a-z]+)$/);
                fieldValidationErrors.name = nameValid ? '' : ' es inválido';
                console.log(nameValid)
                break;
            case 'lastname':
                lastnameValid = value.match(/^(\w+)$/i);
                fieldValidationErrors.lastname = lastnameValid ? '' : ' es inválido';
                break;
            case 'password':
                passwordValid = value.length === 4;
                passwordValid = value.match(/^\d{4}$/)
                fieldValidationErrors.password = passwordValid ? '': ' debe ser un valor numérico de 4 digitos';
                pass1 = value;
                break;
            case 'password2':
                password2Valid = (pass1===value)
                fieldValidationErrors.password2 = password2Valid ? '' : ' debe ser igual a la anterior'
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
        this.setState({valid:{form: this.state.valid.name && 
                                    this.state.valid.password &&
                                    this.state.valid.password2 &&
                                    this.state.valid.department
                                }});
        //console.log(this.state.valid.name)
      }

    createUser = async ()=>{
        const{
            name,
            lastname,
            username,
            password,
            department,
        } = this.state
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
        }).then(
            this.setState({userCreated: true}))
    }

    createNew = () => {
        console.log()
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
            />
            :
            
            <SignupLayout
                handleSelection = { id => this.handleDeptSelection (id)}
                onSubmit = {this.handleSubmit}
                disableButton = {!this.state.formValid}
                formErrors = {this.state.formErrors}
                handleUserInput ={ (e)=>this.handleUserInput(e)}
            />
   

        )
    }
}
export default graphql(ADD_USER,{name:'AddUser'})(Signup)