import React, {Component} from 'react';
import Times from '../components/times.jsx'



class TimesContainer extends Component{
    state ={
        started : false,
        startTime : '',
        stopTime: '',
        stopTypeId: 0,
        comment: '',
        validStopType:false,
    }
    handleSelection = (id)=>{
        this.setState({
            stopTypeId : id,
            validStopType: true,
        })
    }

    handleStart = (prevState) =>{
        if(this.state.validStopType){
        let start = new Date()
        this.setState({
            started: !prevState.started,
            startTime : start
        })}
    }
    
    handleStop = (prevState) =>{
        let stop = new Date()
        this.setState({
            started: !prevState.started,
            stopTime: stop
        })
    }
    storeStop = (min,sec)=>{
        console.log('time Elapsed: ')
        console.log(min, sec)
        console.log (this.state)
    }

    storeComment=(e)=>{
        this.setState({
            comment: e.target.value
        })
    }

    render(){
        return(            
            <Times                
                handleSelection = {(id)=>this.handleSelection(id)}
                user = {this.props.user}
                user_id = {this.props.user_id}
                dept_id = {this.props.dept_id}
                started = {this.state.started}
                storeComment = {this.storeComment}
                disableButton = {!this.state.validStopType}
                storeStop = {(min,sec)=>this.storeStop(min,sec)}
                handleStart = {(e)=>this.handleStart(this.state )}
                handleStop = {(e)=>this.handleStop(this.state)}
            />
            )
        }
    }
    
    export default TimesContainer