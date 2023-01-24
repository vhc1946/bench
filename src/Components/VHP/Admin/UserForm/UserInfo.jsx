import React, {Component} from 'react';
import { ActionButton } from '../../Buttons/ActionButton';

export class UserInfo extends Component{
	constructor(props){
		super(props);
  	}

  	render(){
    	return(
       		<div className = "float-container">
                <div className = "card">
                    <div class="card-title">User Information</div>

                    <ActionButton 
                        ClickFunction = {this.props.SetUserForm}
                        ButtonType = "close-button"
                        text="X"
                    />
                </div>
            </div>
    	)
  	}
}