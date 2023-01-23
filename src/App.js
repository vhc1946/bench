import './App.css';

import {VHPapp} from './Components/VHP/AppBox';
import React, {Component} from 'react';
import { Ticket } from './Data/Ticket'


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

class DevApp extends Component{
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
}


var configdefault = {
  tb:{
    qacts:[],
    macts:{}
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
