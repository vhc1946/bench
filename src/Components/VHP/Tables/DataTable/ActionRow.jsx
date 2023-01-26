import React, { Component } from 'react';
import { ActionButton } from '../../Buttons/ActionButton';
import { SearchBar } from './SearchBar';

/**
 * Takes an array of actions and creates a set of Action Buttons
 * data : [
 * 		{
 * 			text 			: string
 * 			id   			: string
 * 			ClickFunction 	: function()
 * 			type			: type of object to create
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
		const items = data.map((obj) => {
			if (obj.type == "ActionButton" || obj.type == undefined) {
				return(<ActionButton
					text = {obj.text}
					id = {obj.id}
					ClickFunction = {obj.ClickFunction}
					data = {obj.data}
				/>)
			} else if (obj.type == "SearchBar") {
				return(<SearchBar
                    FilterByText = {obj.FilterByText}
					placeholder = {obj.placeholder}
                />)
			}
		}
			
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