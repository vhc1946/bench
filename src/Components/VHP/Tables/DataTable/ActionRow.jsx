import React, { Component } from 'react';
import { ActionButton } from '../../Buttons/ActionButton';

/**
 * Takes an array of actions and creates a set of Action Buttons
 * data : [
 * 		{
 * 			text 			: string
 * 			id   			: string
 * 			ClickFunction 	: function()
 * 		}
 * 	]
 */
export class ActionRow extends Component {
	constructor(props) {
		super(props)

		this.MapActionData = this.MapActionData.bind(this)
	}

	MapActionData() {
		const data = this.props.data
		const items = data.map((obj) => 
			<ActionButton
				text = {obj.text}
				id = {obj.id}
				ClickFunction = {obj.ClickFunction}
				data = {obj.data}
			/>
		);

		return items
	}

	/**
	 * Returns an Action Row
	 * @returns render object
	*/
	render() {
		return(
			<div className = "action-row">
				{this.MapActionData()}
			</div>
		);
	}
}