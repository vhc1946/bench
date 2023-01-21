import React, {Component} from 'react';

/* APP BOX

  The App Box can supply every Compont / functionality used by every / most / some
  apps. It is included as an extension of an App.

  TODO:
  <TitleBar/>
  <UserView/> (log in/out/settings)
  <DropNote/>
  <
*/


/* Title Bar

  Holds descriptions and functionality for the App as well as the current task


*/

class ToolBar extends Component{
  constructor({
    qacts={},
    macts={}
  }){
    super();
    this.state={//
      qacts:{},
      macts:{},
      toggleMore:false
    }


  }



  //ADDmactions(){}
  //ADDqactions(){}


  render(){
    return(
      <div id='titlebar-cont' className='titlebar'>
        <div id='titlebar-cont-left'>
          <img src='http://vhpportal.com/Tech/bin/repo/assets/icons/V-Mark-red.png' id='titlebar-button-home' className='titlebar-button-action'/>
          <img src='http://vhpportal.com/Tech/bin/repo/assets/icons/menu-burger.png' id='titlebar-button-more' className='titlebar-button-action'/>
          <div id='titlebar-moretools'></div>
          <div id='titlebar-titlebar-moretools-quick'></div>
        </div>
        <div id="titlebar-title"></div>
        <div id="titlebar-cont-right"></div>
      </div>
    )
  }
}

class UserView extends Component{

}

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
      }
    }
  }

  toolBar(){return(<ToolBar {...this.state.config.tb}/>)}//deliver TitleBar
  userView(){return(<UserView/>)}//deliver UserView


  //will render every need vhpapp tools
  deliverTools(){
    return(
      <>
        {this.state.config.tb.active&&this.toolBar()}
      </>
    )
  }
}
