import React from 'react';
import ReactNotifications from 'react-browser-notifications';
 
class Notification extends React.Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  showNotifications() {
   
    if(this.n.supported()) this.n.show();
  }
 
  handleClick(event) {
    console.log("Notification Clicked") 
    window.focus()
    this.n.close(event.target.tag);
  }
 
  render() {
    return (
      <div>
        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Recordatorio" // Required
          body="This is the body"
          icon = '../../../public/favicon.ico'
          tag="abcdef"
          timeout="200000"
          onClick={event => this.handleClick(event)}
        />
        <button onClick={this.showNotifications}>
          Notify Me!
        </button>
 
      </div>
    )
  }
}
export default Notification