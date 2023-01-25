import React, {Component} from 'react';
import {ActionButton} from '../Buttons/ActionButton';
import { LogIO } from './UserForm/UserLogIO';

/* Tool Bar
    Holds descriptions and functionality for the App as well as the current task
*/

export class ToolBar extends Component{
  	constructor(props){
		super(props);
		this.state={//
			qacts:props.qacts||[],
			macts:props.macts||[],
			toggleMore:false,
			userformactive:false
		}
		this.ToggleMore = this.ToggleMore.bind(this);
  	}




	ToggleMore(set){
		this.setState({
			toggleMore:this.state.toggleMore?false:true
		});
	}

	/**
	 * TODO: Redo the way qacts and macts are being set. Do not set this.state directly
	 * Would not want to return either if we're using state or props - it'll render whatever state is set to
	 * If state or props is nothing, it renders nothing. If there are actions, it renders them.
	 */
	ADDmactions(){
		return(
		<div id="titlebar-moretools-quick">
		{this.state.macts.map(ma=>{
			return(
			<img
				key={ma.key}
				id={ma.id}
				className='titlebar-button-action'
				onClick={ma.onClick}
				title={ma.title}
				src={ma.src}
			/>)
		})}
		</div>
		)
	}
	ADDqactions(){
		return(
		<div id="titlebar-moretools-quick">
			{this.state.qacts.map(qa=>{
				return(
				<img
				id={qa.id}
				className='titlebar-button-action'
				onClick={qa.onClick}
				title={qa.title}
				src={qa.src}
				/>)
			})}
		</div>
		)
	}

	render(){
		return(
		<>
			<div id='titlebar-cont' className='titlebar'>
			<div id='titlebar-cont-left'>
				<img src='http://vhpportal.com/Tech/bin/repo/assets/icons/V-Mark-red.png'
					id='titlebar-button-home'
					className='titlebar-button-action'/>
				<img src='http://vhpportal.com/Tech/bin/repo/assets/icons/menu-burger.png'
					id='titlebar-button-more'
					className='titlebar-button-action'
					onClick={this.ToggleMore}/>
				{this.state.toggleMore&&this.ADDmactions()}
				<div id='titlebar-moretools-quick'></div>
			</div>
			<div id="titlebar-title"></div>
			<div id="titlebar-cont-right">
				<ActionButton
					text="User Form"
					id="user-form-button"
					ClickFunction = {this.props.SetUserForm}
				/>
			</div>
			</div>
		</>
		)
	}
}
