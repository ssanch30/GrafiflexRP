import React,{Component} from 'react'
import Wrapper from '../components/Wrapper';
import LoginLayout from '../../login/components/login-layout.jsx'
import userinfo from '../../database/userdata.json'
import Header from '../components/Header.jsx'
import TimesContainer from '../../times/containers/times-container.jsx'

function valdiateUser(user,psw){
    let users=userinfo.userList
    for(let i = 0 ; i<users.length; i++){
        if (users[i].name===user){
            if(users[i].psw===psw){
                console.log("true")
                return true
            }
        }
    }
    console.log('false')
    return false

}


class WrapperContainer extends Component {
    state = {
        user: "",
        password: "",
        validUser: false,
    }
    handleLogin = e=>{
        e.preventDefault()
        let user = e.target.elements.username.value
        let psw = e.target.elements.psw.value
        let isUserValid = valdiateUser(user,psw);
        if (isUserValid){
            console.log(user, psw) 
            
            this.setState({
                user: user,
                password: psw,
                validUser:true,
            })
        }
    }

    render(){
    return(
        <Wrapper>
            <Header></Header>
            {
                this.state.validUser ?
            <TimesContainer></TimesContainer> :
            <LoginLayout className='Form'
                checkUser = {this.handleLogin}
            >
            </LoginLayout>        
            
        }    
        </Wrapper>
    )
}
}

export default WrapperContainer