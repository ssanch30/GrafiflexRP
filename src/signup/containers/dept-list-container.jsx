import  React, {Component} from 'react'
import Departments from '../components/department-dd.jsx'
import ddList from './department-list.json'
class deptList extends Component {

    state = {
        listOpen: false,
        headerTitle:this.props.headerTitle,
    }

    toggleList = (prevState)=>{
        this.setState({
            listOpen: !prevState.listOpen
        })
    }

    handleSelection= (id)=>{
        this.props.handleSelection(id)
        this.setState({listOpen:false,
                      headerTitle: ddList.departments[id-1].id + ". " +ddList.departments[id-1].name,
                    })
    }

    render(){
        

        return(
            <div>
                <Departments
                    headerTitle = {this.state.headerTitle}
                    listOpen = {this.state.listOpen}
                    openDropdown= {(e)=>this.toggleList(this.state)}
                    ddList = {ddList.departments}
                    onSelection = {(id)=>this.handleSelection(id)}
                />
            </div>
        )
    }
}

export default deptList