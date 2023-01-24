import React, {Component} from 'react';

import '../../style/vhp-logIO-form.css';

export class LogIO extends Component{
  constructor(props){
    super(props);

    this.state={
      active:this.props.user.active,
      name:this.props.user.name,
      pswrd:this.props.user.pswrd
    }
  }
  render(){
    if(this.state.active){
    return(
        <div id="login-box">
          <div id="login-info">
            <label>User</label>
            <input className="login-username"
                   type="text"
                   value={this.props.name}/>
            <label>Password</label>
            <input className="login-password"
                   type="password"
                   value={this.props.pswrd}/>
            <div className = "action-buttons-div">
              <div className = "login-action-button"
                   id="login-submit"
                   className="flat-action-button"
                   onClick={this.props.clickFun}>SUBMIT</div>
              <div className = "login-action-button"
                   id="logiout-button"
                   className="flat-action-button">LOGOUT</div>
            </div>
          </div>
        </div>
    )
  }else{return false}
  }
}
