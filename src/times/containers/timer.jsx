
import React, {Component} from 'react'



class Timer extends Component{
    state = {
        seconds: '00', 
        minutes: '00'
    }
    secondsElapsed = 0

    tick = () => {
        var min = Math.floor(this.secondsElapsed / 60)
        var sec = this.secondsElapsed - (min * 60)

        this.setState({
            minutes: min.toString(),
            seconds: sec.toString()
        })
        if (sec < 10) {
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

    render(){
        return (
            <div>
            <h1>{this.state.minutes}:{this.state.seconds}</h1>
            </div>
            )
        }
    }
    
    export default Timer
    
 /*   
 graphql(ADD_USER,{name:'AddUser'})(Signup)
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                seconds: '00', 
                minutes: ''
            }
            this.secondsRemaining; 
            this.intervalHandle;
            this.handleChange = this.handleChange.bind(this);
            // method that triggers the countdown functionality
            this.startCountDown = this.startCountDown.bind(this);
            this.tick = this.tick.bind(this);
        }
        handleChange(event) {
            this.setState({
                minutes: event.target.value
            })
        }
        tick() {
            var min = Math.floor(this.secondsElapsed / 60);
            var sec = this.secondsElapsed - (min * 60);
            this.setState({
                minutes: min,
                seconds: sec
            })
            if (sec < 10) {
                this.setState({
                    seconds: "0" + this.state.seconds,
                })
            }
            if (min < 10) {
                this.setState({
                    value: "0" + min,
                })
            }
            if (min === 0 & sec === 0) {
                clearInterval(this.intervalHandle);
            }
            this.secondsTranscurred++
        }
        startCountDown() {
            this.intervalHandle = setInterval(this.tick, 1000);
            let time = this.state.minutes;
            this.secondsRemaining = time * 60;
        }
        }*/