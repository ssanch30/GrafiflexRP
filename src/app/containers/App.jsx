import React, { Component } from 'react';
import AppLayout from '../components/AppLayout'
import '../components/App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faInfoCircle);



class App extends Component {
  render() {
    return (
      <AppLayout/>      
    );
  }
}

export default App;
