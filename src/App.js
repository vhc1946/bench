import './App.css';

import {VHPapp} from './Components/VHP/Admin/AppBox';
import React, {Component} from 'react';
import { Ticket } from './Data/Ticket'
import {MainApp} from './TicketApp'
import {SpiffApp} from './SpiffApp'
import { DockApp } from './DockApp';


/* Template App
  Extends an AppBox to enherit functionality used in all applications (or not
  used if not needed), as well as inherit the react Component class. This should
  mean a shared state as well.

  Config files can be created for each created App to notify what parts of the
  AppBox will be required. Parts that are not required can simply be ignored.
  It may be useful to then store that config in state to be available for change
  by the App

  //Removed inheritance and set render function within VHCapp
*/

/*class DevApp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
        <VHPapp config = {this.props.config} ticket={Ticket}></VHPapp>
      </>
    );
  }
}*/

class DevApp extends VHPapp{
  constructor(props){
    super(props);
  }

  renderApp(props){
    return(
      <>
        {this.deliverTools()}
        <div>
          <DockApp ticket={Ticket}/>
        </div>
      </>
    )
  }
  render(){
    if (this.state.config.user.loggedIn == true) {
      return (
        <>
          {this.userLogIO()}
          {this.renderApp()}
        </>
      )
    } else {
      return(
          <>
            {this.userLogIO() || this.renderApp()}
          </>
      );
    }
  }
}

var configdefault = {
  tb:{
    qacts:[],
    macts:[
      {
        key:'save',
        id:'wo-save-button',
        src:'http://vhpportal.com/Tech/bin/repo/assets/icons/disk.png',
        title:'Save WO',
        onClick:(ele)=>{
          console.log('Save Page');
        }
      },
      {
        key:'refresh',
        id:'wo-refresh-button',
        src:'http://vhpportal.com/Tech/bin/repo/assets/icons/refresh.png',
        title:'Refresh WO',
        onClick:(ele)=>{   // Refresh info
          console.log('Refresh Page')
        }
      }
    ]
  },
  user:{
  }
}
function App() {
  return (
    <div className = "App">
      <DevApp config={configdefault}/>
    </div>
  );
}

export default App;
