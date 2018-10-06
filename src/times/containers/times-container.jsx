import React, {Component} from 'react';
import Times from '../components/times.jsx'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const ADD_STOP = gql`
mutation newStop($stop: NewStop!){
    stopAdd(stop:$stop){
      id
      minutes
    }
  }
`


class TimesContainer extends Component{
    state ={
        started : false,
        startTime : '',
        stopTime: '',
        stopTypeId: 0,
        minutes:0,
        comment: '',
        validStopType:false,
        stopCreated:false
    }
    handleSelection = (id)=>{
        this.setState({
            stopTypeId : id,
            validStopType: true,
        })
    }

    handleStart = (prevState) =>{
        if(this.state.validStopType){
        let start = new Date().toJSON().slice(0, 19).replace('T', ' ')
        this.setState({
            started: !prevState.started,
            startTime : start
        })}
    }
    
    handleStop = (prevState) =>{
        let stop = new Date().toJSON().slice(0, 19).replace('T', ' ')
        this.setState({
            started: !prevState.started,
            stopTime: stop
        })
    }
    storeStop = (min,sec)=>{

        console.log('time Elapsed: ')
        console.log(min, sec)
        console.log (this.state)

        min = parseInt(min,10)
        sec = parseInt(sec,10)/60
        let minutes = min+sec

        this.setState({
            minutes,
        },this.createStop)
    }

    storeComment=(e)=>{
        this.setState({
            comment: e.target.value
        })
    }


    createStop = async ()=>{
        let user_id = parseInt(this.props.user_id,10)
        let stoptype_id = parseInt(this.state.stopTypeId,10)
        let start = this.state.startTime
        let stop = this.state.stopTime
        let minutes = this.state.minutes
        let comment = this.state.comment

        try{
            await this.props.newStop({
                variables:{
                    stop:{
                        user_id,
                        stoptype_id,
                        start,
                        stop,
                        minutes,
                        comment
                      }
                    }
                }).then(this.setState({stopCreated:true,}))
        }
        catch(e){
            console.log(e.message)
            this.setState({
                            stopCreated: true,
                })  
            }                             
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
                handleStart = {(e)=>this.handleStart(this.state)}
                handleStop = {(e)=>this.handleStop(this.state)}
            />
            )
        }
    }
    
    export default graphql(ADD_STOP,{name:'newStop'})(TimesContainer)