import  React, {Component} from 'react'
import StopType from '../components/stoptype.jsx'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const GET_STOPTYPE= gql`
query stopByDept($dept:Int!)
{
  stoptypesByDept(dept_id: $dept){
    id
    type
    description
  }
}`

class stopContainer extends Component {

    state = {
        listOpen: false,
        headerTitle:this.props.headerTitle,
        dept: this.props.dept,
        showDescription: false,
    }
    

    handleClickOutside = ()=>{
        this.setState({
            listOpen: false
        })
    }

    toggleList = (prevState)=>{
        this.setState({
            listOpen: !prevState.listOpen
        })
    }

    handleSelection= (id)=>{
        this.props.handleSelection(id)
        let item = this.props.data.stoptypesByDept.find(x => x.id === id);

        this.setState({listOpen:false,
                      headerTitle: item.id +". "+ item.type,
                      showDescription:true
                    })
        this.description = item.description
    }

    render(){
        

        return(
            <div>
                <StopType
                    headerTitle = {this.state.headerTitle}
                    listOpen = {this.state.listOpen}
                    openDropdown= {(e)=>this.toggleList(this.state)}
                    typeList = {this.props.data.stoptypesByDept}
                    onSelection = {(id)=>this.handleSelection(id)}
                    showDescription = {this.state.showDescription}
                    description = {this.description}
                />
            </div>
        )
    }

}


export default graphql(GET_STOPTYPE, {
    options: (props) => ({ variables: { dept: parseInt(props.dept_id) } })
  })(stopContainer)