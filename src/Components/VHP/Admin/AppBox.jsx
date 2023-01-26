import React, {Component} from 'react';

import {LogIO} from './UserForm/UserLogIO';
import {ToolBar} from './ToolBar';
import { UserData } from '../../../Data/UserData'

import {MergeObject} from '../../../bin/vhp-tools';

import {SENDrequestapi} from '../../../bin/vapi/vapicore.js';
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
		//TODO: Remove duplicate state, either in Tool Bar or here
  	this.state = {
			config:{
				tb:{
					active:true,
					qacts:props.config.tb.qacts||{},
					macts:props.config.tb.macts||{}
				},
				user:{
					active:true,
					name:'',
					pswrd:'',
					loggedIn:false,
					userInfo:UserData
				}
			},
			settings:{

			}
		}

    	this.ValidateLogin = this.ValidateLogin.bind(this)
		this.ToggleUserForm = this.ToggleUserForm.bind(this)
		this.SetUserInfo = this.SetUserInfo.bind(this)
		this.LogUserOut = this.LogUserOut.bind(this)
  	}
	
	
	componentDidMount(){
		this.ValidateLogin({//validate passed config
			name:this.state.config.user.name,
			password:this.state.config.user.pswrd
		});
	}
	/**
	 * Deliver tool bar using provided configuration
	 * @returns Tool Bar Component
	 */
	toolBar() {
		return (
			<ToolBar
				{...this.props.config.tb}
				user = {this.state.config.user}
				ToggleUserForm = {this.ToggleUserForm}
			/>
		)
	}

	/**
	 * Deliver user login form component
	 * @returns Login-component
	 */
	userLogIO(){
		if (this.state.config.user.active) {
			return (
				<LogIO
					user={this.state.config.user}
					userInfo = {this.state.userInfo}
					ValidateLogin={this.ValidateLogin}
					ToggleUserForm = {this.ToggleUserForm}
					SetUserInfo = {this.SetUserInfo}
					LogUserOut = {this.LogUserOut}
				/>
			)
		} else {
			return (
				false
			)
		}
	}

	LogUserOut(){
		this.setState(MergeObject(this.state,'user',{loggedIn:false, active:true}))
	}

	/**
	 * Takes the state provided by the UserInfo form and updates this.state.
	 * TODO: Add user info to this.state user object
	 * @param {UserInfo} data
	 */
	SetUserInfo(data) {
		let retval = MergeObject(this.state, 'userInfo', data)
		this.setState(retval, () =>
    	this.ToggleUserForm());
	}

	/**
	 * Validates whether a users credentials are correct
	 * TODO: State for login failing - instead of true/false, could have multiple states and add a listener
	 * in order to notify the user if their credentials are incorrect. Could also do separate state entirel
	 * @param {*} data : data passed to function
	 */
	ValidateLogin(data) {
		SENDrequestapi({},{
			user:data.name,
			pswrd:data.password
		},'LOGIN').then(
			answr=>{
				console.log(answr);
				//if(answr.success){// GOOD

					this.setState(MergeObject(this.state,'user',{active:false,loggedIn:true}));//update config
					//can send back user information as well
				//}
			}
		)
 	}

	/**
	 * Displays or hides the login form. We could likely combine this with ValidateLogin, as we would
	 * want the user info before displaying the form anyway
	 */
	ToggleUserForm() {
		this.setState(MergeObject(this.state,'user',{active:!this.state.config.user.active,loggedIn:true}))
	}


  	/**
	 * Deliver the tool bar
	 * @returns Toolbar component
	 */
  	deliverTools(){
    	return(
      		<>
        		{this.state.config.tb.active&&this.toolBar()}
      		</>
    	)
  	}
}
