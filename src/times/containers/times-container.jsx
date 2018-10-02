import React, {Component} from 'react';
import Times from '../components/times.jsx'




class TimesContainer extends Component{
    
    handleSelection = (id)=>{
        console.log(id)
    }
    
    render(){
        return(            
            <Times                
                handleSelection = {(id)=>this.handleSelection(id)}
                user = {this.props.user}
                user_id = {this.props.user_id}
                dept_id = {this.props.dept_id}
            />
            )
        }
    }
    
    export default TimesContainer
    
    /*                
    const GET_DOGS = gql`
    {
        dogs {
            id
            breed
        }
    }
    `;
    
    const Dogs = ({ onDogSelected }) => (
        <Query query={GET_DOGS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            
            return (
                <select name="dog" onChange={onDogSelected}>
                {data.dogs.map(dog => (
                    <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                    </option>
                    ))}
                    </select>
                    );
                }}
                </Query>
                );*/