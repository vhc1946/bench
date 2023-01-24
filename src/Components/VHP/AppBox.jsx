import React, {Component} from 'react';

import {LogIO} from './UserLogIO';
import {ToolBar} from './ToolBar';

/* APP BOX

  The App Box can supply every Compont / functionality used by every / most / some
  apps. It is included as an extension of an App.

  TODO:
  <ToolBar/>
  <UserView/> (log in/out/settings)
  <DropNote/>
  <
*/
/* VHP APP
  Will be the extension for every app created. In it will be options for the app
  to use as well as be the controller.
*/
export class VHPapp extends Component{
  constructor(props){
    super(props);

    //tools to seperate the state from App's
    //things in the tool box are public to the rest of the App
    this.state={
      config:{
        tb:{
          active:true,
          qacts:props.config.tb.qacts||{},
          macts:props.config.tb.macts||{}
        },
        user:{
          active:true,
          name:'VOGCH',
          pswrd:'vogel123'
        }
      },
      settings:{

      }
    }
  }

  toolBar(){return(<ToolBar {...this.state.config.tb}/>)}//deliver TitleBar
  OClogIO(ele){
    console.log(this.setState({...this.state.config.user,active:false}));
  }
  userLogIO(){
    if(this.state.config.user.active){
      return(<LogIO {...this.state.config.user},{subLogIO:this.OClogIO}}/>)//deliver UserView
    }else{return false}
  }


  //will render every need vhpapp tools
  deliverTools(){
    return(
      <>
        {this.state.config.tb.active&&this.toolBar()}
      </>
    )
  }
}
