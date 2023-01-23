import React, {Component} from 'react';

//Tool bar does not have its own qacts state - it uses the state of its parent (the app box)
//If you declare state again in tool bar, it'll be a separate state that won't track with
//any changes made to qacts in the app container.
//If that doesn't matter and qacts are only used or modified here, it can be moved into this class
export class ToolBar extends Component{
    constructor(props){
      super(props);
      this.state={//
        toggleMore:false
      }
      console.log("Tool Bar props: ", this.props)
    }
  
  
  
    //If we want these in the toolbar, we don't want to track the state of the qacts in the app then
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
          <div id="titlebar-cont-right">{this.props.qacts}</div>
        </div>
      )
    }
  }