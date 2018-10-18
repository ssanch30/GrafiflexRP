import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import TimesContainer from '../../times/containers/times-container.jsx'
import Admin from '../../admin/containers/admin.jsx'
class ProtectedRoute extends Component {
    render() {
        const imasd = (this.props.dept_id===6)
      return (
        <Route 
          path = {this.props.path}
          render={props => (
            this.props.authenticated ? 
                imasd ?
                <Admin
                    user = {this.props.user}
                    user_id = {this.props.user_id}
                    dept_id = {parseInt(this.props.dept_id,10)}
                /> :
                <TimesContainer 
                    user = {this.props.user}
                    user_id = {this.props.user_id}
                    dept_id = {parseInt(this.props.dept_id,10)}
                />  :
            <Redirect to='/' />
        
          )} 
        />
      )
    }
  }

  export default ProtectedRoute