import React,{Component} from 'react'
import Wrapper from '../components/Wrapper';
import LoginLayout from '../../login/components/login-layout.jsx'
import userinfo from '../../database/userdata.json'
import Header from '../components/Header.jsx'
import TimesContainer from '../../times/containers/times-container.jsx'
import typeList from '../../database/types.json'

function valdiateUser(user,psw){
    let users=userinfo.userList
    for(let i = 0 ; i<users.length; i++){
        if (users[i].username===user){
            if(users[i].psw===psw){
                return [true, users[i].dept]
            }
        }
    }
    return false

}


class WrapperContainer extends Component {
    state = {
        user: "",
        password: "",
        validUser: false,
        dept : 'cal'
    }

    handleLogin = e=>{
        console.log("tesst")
       // e.preventDefault()
        let user = e.target.elements.username.value
        let psw = e.target.elements.psw.value
        let [isUserValid,userDept] = valdiateUser(user,psw);

        if (isUserValid){
            //console.log(user, psw) 
            
            this.setState({
                user: user,
                password: psw,
                validUser:true,
                dept : userDept
            })
        } else {
            console.log("user not valid")
        }
        console.log(user,psw)
    }

    render(){
        const depart = this.state.dept;
        const types = typeList.departament;
        const defList = types[depart]
        return(
            <Wrapper>
            <Header></Header>
            {
                this.state.validUser ?  
                <TimesContainer list = {defList}/>:
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