import React, {Component} from 'react';
import { ToolBar } from '../VHP/ToolBar'
import { UserView } from './UserView';
import { MainContainer } from '../MainContainer';

/* APP BOX

  The App Box can supply every Component / functionality used by every / most / some
  apps. It is included as an extension of an App.

  TODO:
  <TitleBar/>
  <UserView/> (log in/out/settings)
  <DropNote/>
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
      tb:{
        active:true,
        qacts:props.config.tb.qacts||[],
        macts:props.config.tb.macts||{}
      },
      ticket:props.ticket
    }
    

    this.ToggleToolBar = this.ToggleToolBar.bind(this)
    this.AddQAction = this.AddQAction.bind(this)
    this.UpdateTicket = this.UpdateTicket.bind(this)
  }

  /**
     * Updates a specified prop in the ticket object
     * TODO: Support for deep nesting (Currently only nests one deep)
     * May need to copy object, update nested object, then set state to new object
     * @param {*} prop : prop to be updated
     * @param {*} data : data prop is set to
     */
  UpdateTicket(params) {
    console.log("updating ticket", params.prop, params.data)
    console.log(this.state.ticket)
    this.setState({
      ticket:{...this.state.ticket, total: params.data}
    })
  }

  /**
   * Toggle visiblity of the tool bar
   */
  ToggleToolBar() {
    this.setState({
      tb:{...this.state.tb, active: !this.state.tb.active}
    })
  }

  /**
   * Adds a new div to the quick actions
   */
  AddQAction() {
    this.setState({
      tb:{...this.state.tb, qacts: [this.state.tb.qacts, <div key = "test">Test!</div>]}
    })
  }

  toolBar(){return(<ToolBar {...this.state.tb}/>)}//deliver TitleBar
  userView(){return(<UserView/>)}//deliver UserView


  //will render every need vhpapp tools
  render(){
    return(
      <div>
        {this.state.tb.active&&this.toolBar()}
        <MainContainer 
          ticket={this.state.ticket} 
          UpdateTicket = {this.UpdateTicket}
        />
      </div>
    )
  }
}
