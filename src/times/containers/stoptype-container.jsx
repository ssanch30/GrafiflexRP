import  React, {Component} from 'react'
import StopType from '../components/stoptype.jsx'

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
        this.description = this.props.list[id-1].description
        this.setState({listOpen:false,
                      headerTitle: this.props.list[id-1].id +". "+this.props.list[id-1].type,
                      showDescription:true
                    })
    }

    render(){
        

        return(
            <div>
                <StopType
                    headerTitle = {this.state.headerTitle}
                    listOpen = {this.state.listOpen}
                    openDropdown= {(e)=>this.toggleList(this.state)}
                    typeList = {this.props.list}
                    onSelection = {(id)=>this.handleSelection(id)}
                    showDescription = {this.state.showDescription}
                    description = {this.description}
                />
            </div>
        )
    }

}

export default stopContainer