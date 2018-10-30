
import React, {Component} from 'react'
//import Notification from './notification.jsx'
import ReactNotifications from 'react-browser-notifications';
var  nShown = false

class Timer extends Component{
    state = {
        seconds: '00', 
        minutes: '00'
    }
    secondsElapsed = 0

    tick = () => {
        var min = Math.floor(this.secondsElapsed / 60)
        var sec = this.secondsElapsed - (min * 60)

        if (sec >= 5 && !nShown){
            if(this.n.supported()) this.n.show();
            nShown = true
        }

        this.setState({
            minutes: min.toString(),
            seconds: sec.toString()
        })
        if (min < 10) {
            this.setState({
                seconds: "0" + sec,
            })
        }
        if (min < 10) {
            this.setState({
                minutes: "0" + min.toString(),
            })
        }
        this.secondsElapsed++
    }

    componentDidMount(){
        this.startCounter()
    }
    componentWillUnmount(){
        this.stopCounter()
        nShown = false
    }

    
    startCounter=() => {
        this.intervalHandle = setInterval(this.tick, 1000);
    }

    stopCounter = ()=>{
        this.props.storeStop(this.state.minutes,this.state.seconds)
        clearInterval(this.intervalHandle);
        this.setState({
            seconds: '00',
            minutes: '00'
        })
    }

    handleNotifClick(event) {
        window.focus()        
        this.n.close(event.target.tag);
      }

    render(){
        return (
            <div>
                <h1>{this.state.minutes}:{this.state.seconds}</h1>
                <ReactNotifications
                    onRef={ref => (this.n = ref)} // Required
                    title={'Registro de Paradas > ' + this.state.minutes  + ' minutos'} // Required
                    body= ' recuerda detenerla cuando termines'
                    icon = '../../img/logografiflex.png'
                    tag="notification"
                    interaction = {true}
                    onClick={event => this.handleNotifClick(event)}
                />

            </div>
            )
        }
    }
    
    export default Timer
    
