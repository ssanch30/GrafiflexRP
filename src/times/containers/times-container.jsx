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



function toMySQLFormat(date){
    let pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    };
    return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    ' ' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds()) 
}

class TimesContainer extends Component{
    state ={
        started : false,
        startTime : '',
        stopTime: '',
        stopTypeId: 0,
        minutes:0,
        comment: '',
        validStopType:false,
        stopCreated:false,
        headerTitle: "Tipo de Parada",
        unselect: false
        
    }
    handleSelection = (id)=>{
        this.setState({
            stopTypeId : id,
            validStopType: true,
        })
    }

    handleStart = (prevState) =>{
        if(this.state.validStopType){
        let start = toMySQLFormat(new Date())
        this.setState({
            started: !prevState.started,
            startTime : start
        })}
    }
    
    handleStop = (prevState) =>{
        let stop = toMySQLFormat(new Date())
        
        this.setState({
            started: !prevState.started,
            stopTime: stop,
            headerTitle: "Tipo de Parada",
            unselect:true,
            validStopType:false
        })
        setTimeout(()=>{this.setState({unselect: false})},100)
    }
    storeStop = (min,sec)=>{


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
                }).then(this.setState({stopCreated:true}),
                    setTimeout(
                        ()=>this.setState({stopCreated:false}),5000))
        }
        catch(e){
            console.log(e.message)
            this.setState({
                            stopCreated: false,
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
                stopCreated ={this.state.stopCreated}
                storeComment = {this.storeComment}
                disableButton = {!this.state.validStopType}
                storeStop = {(min,sec)=>this.storeStop(min,sec)}
                handleStart = {(e)=>this.handleStart(this.state)}
                handleStop = {(e)=>this.handleStop(this.state)}
                headerTitle = {this.state.headerTitle}
                unselect = {this.state.unselect}
            />
            )
        }
    }
    
    export default graphql(ADD_STOP,{name:'newStop'})(TimesContainer)