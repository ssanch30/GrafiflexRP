import React, {Component}from 'react'
import SignupLayout from '../components/signup-layout.jsx'


class Signup extends Component {

    render(){
        return(
        <SignupLayout
            onSubmit = {this.handleSelection}
        />
        )
    }
}
export default Signup