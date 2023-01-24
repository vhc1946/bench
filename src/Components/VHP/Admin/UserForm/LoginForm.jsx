import React, {Component} from 'react';
import { TextInput } from '../../Inputs/TextInput'
import { ActionButton } from '../../Buttons/ActionButton'

export class LoginForm extends Component{
	constructor(props){
		super(props);

		this.state={
    		name:this.props.user.name,
      		pswrd:this.props.user.pswrd
    	}

		this.SetUsername = this.SetUsername.bind(this)
		this.SetPassword = this.SetPassword.bind(this)
  	}

	SetUsername(Input) {
		this.setState({
			name:Input
		})
	}

	SetPassword(Input) {
		this.setState({
			pswrd:Input
		})
	}

  	render(){
    	return(
       		<div id="login-box">	
          		<div id="login-info">
            		<label>User</label>
					<TextInput
                   		type="text"
                   		value={this.state.name}
						ChangeFunction = {this.SetUsername}
					/>
            		<label>Password</label>
					<TextInput
                   		type="password"
                   		value={this.state.pswrd}
						ChangeFunction = {this.SetPassword}
					/>
           			<div className = "action-buttons-div">
					   <ActionButton
							text="SUBMIT"
							ClickFunction = {this.props.ValidateLogin}
							data = {{name:this.state.name, password: this.state.pswrd}}
              			/>
            		</div>
          		</div>
        	</div>
    	)
  	}
}