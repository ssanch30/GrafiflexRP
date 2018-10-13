import React, { Component } from 'react';
import AppLayout from '../components/AppLayout'
import '../components/App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faPlay, faStop} from '@fortawesome/free-solid-svg-icons';
//import TestDB from '../../test/testdb.jsx'

library.add(faInfoCircle, faPlay, faStop);



class App extends Component {
  render() {

    return (
      <div>
      <AppLayout/>  
      
      </div>    
    );
  }
}

//<TestDB /> Place this under layout to check db response 

export default App;

