import React,{Component} from 'react'
import Wrapper from '../components/Wrapper';
import LoginLayout from '../../login/components/login-layout.jsx'
import Header from '../components/Header.jsx'
import TimesContainer from '../../times/containers/times-container.jsx'
import Signup from '../../signup/containers/signup.jsx'
//import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo';



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
        user: "",
        validUser: false,
        dept : 0,
        user_id:0,
        sign_up:false, //change this state in case you want to use the app
        wrongCredentials:false
    }
    
    handleLogin = data =>{
        // e.preventDefault()
        if (data.username !== null){
        // let name = data.username.name
        // let lastname = data.username.lastname
        let user = data.username.username
        let user_id = data.username.id
        let userDept = data.username.department.id
        //let isUserValid = true        
        this.setState({
            user: user,
            user_id:user_id,
            dept : userDept,
            validUser:true,                
        })
        }  
        else{
            this.setState({wrongCredentials:true})
        }
    }
    
                          

    render(){
        return(
            <Wrapper>
            <Header/>
            {this.state.sign_up ? 
                <Signup/>:
                this.state.validUser ?  
                <TimesContainer 
                    user = {this.state.user}
                    user_id = {this.state.user_id}
                    dept_id = {parseInt(this.state.dept,10)}
                />:
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
            }
            </Wrapper>
            )
        }
    }
    
    export default WrapperContainer
    
    
    
    
