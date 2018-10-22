import React,{Component} from 'react'
import Wrapper from '../components/Wrapper'
import LoginLayout from '../../login/components/login-layout.jsx'
import Header from '../components/Header.jsx'
import Signup from '../../signup/containers/signup.jsx'
//import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'
import { Route, Switch, withRouter } from 'react-router-dom'
import ProtectedRoute from './protected-route.jsx'



const VALIDATE_USER= gql`
query checkUsername($user:String!, $pswd:Int!){
	username(username:$user, password:$pswd){
        id
        name
        lastname
        username
        department{
                dept_name
                id
            }
    }
}`


class WrapperContainer extends Component {
    state = {
        name:"",
        lastname:"",
        username: "",
        validUser: false,
        dept : 0,
        user_id:0,
        sign_up:false, //change this state in case you want to use the app
        wrongCredentials:false
    }
    
    //////////////////////////////////
    /*//Intended for  not having to singup on development
    state = {
        name:'santiago',
        lastname:"sanchez",
        username: "santiago.sanchez",
        validUser: true, ///////////////////////////CHANGE THIS FOR AVOIDING LOGIN/////////////////////////
        dept : 6,
        user_id:1,
        wrongCredentials:false
    }
    */////////////////////////////////////

    handleLogin = data =>{
        //e.preventDefault()
        if (data.username !== null){
        let name = data.username.name
        let lastname = data.username.lastname
        let username = data.username.username
        let user_id = data.username.id
        let userDept = data.username.department.id
        //let isUserValid = true        
        this.setState({
            name,
            lastname,
            username,
            user_id,
            dept : userDept,
            validUser:true,                
        },	()=>{this.props.history.push('/times')})
        }  
        else{
            this.setState({wrongCredentials:true})
        }
    }
    
                           

    render(){
        return(
            <Wrapper>
                <Header/>
                <Switch>
                    <ProtectedRoute exact path = '/times' 
                                    user = {this.state.name + ' ' + this.state.lastname}
                                    user_id = {this.state.user_id}
                                    dept_id = {parseInt(this.state.dept,10)}
                                    authenticated = {this.state.validUser}
                    />
                    <Route exact path='/'>
                        <ApolloConsumer>{client => (
                            <LoginLayout
                                checkUser = { async (e)=>{
                                    e.preventDefault()
                                    let user = e.target.elements.username.value
                                    let psw = parseInt(e.target.elements.psw.value,10)
                                    //console.log(user,psw)
                                    const { data } = await client.query({
                                        query: VALIDATE_USER,
                                        variables:{
                                            user: user,
                                            pswd: psw
                                        }
                                    });
                                    this.handleLogin(data)
                                }   
                                }
                                wrongUser = {this.state.wrongCredentials}
                                >
                            </LoginLayout>)}  
                        </ApolloConsumer>
                    </Route>
                        
                    <Route exact path = '/signup' component={Signup}/>
                </Switch>
            </Wrapper>
            )
        }
    }
    
    export default withRouter(WrapperContainer)
    
    
    
    
