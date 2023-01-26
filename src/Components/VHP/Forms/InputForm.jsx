import React, { Component } from 'react';
import { DropDown } from '../Dropdowns/DropDown';
import { TextArea } from '../Inputs/TextArea';
import { TextInput } from '../Inputs/TextInput';

/**
 * A React fragment which takes data and returns it in a dynamic form with inputs.
 * TODO: Add support for ActionButtons - have an ActionButton input type
 * formdata :  [
 *                  {
 *                      value: displayed text
 *                      title: the title displayed for the content
 *                      inputType: the type of input to use
 *						type: the type passed into the input object
 *						EventFunction: the EventFunction passed into the input object 
						inputClass: the class assigned to the input
 *                  }
 *             ]
 */
export class InputForm extends Component {
    constructor(props) {
        super(props)

        this.MapFormData = this.MapFormData.bind(this)
		this.GetInput = this.GetInput.bind(this)
    }

	GetInput(inputData) {
		if (inputData.inputType == "TextInput") {
			return (
				<TextInput 
					value = {inputData.value}
					ChangeFunction = {inputData.ChangeFunction}
					type = {inputData.type || 'text'}
					key = {inputData.title}
				/>
			)
		} else if (inputData.inputType == "TextArea") {
			return (
				<TextArea
					value = {inputData.value}
					ChangeFunction = {inputData.ChangeFunction}
					inputClass = {inputData.inputClass}
					key = {inputData.title}
				/>
			)
		} else if (inputData.inputType == "DropDown"){
			return (
				<DropDown 
					list={inputData.list} 
					selected={inputData.selected}
				/>
			)
		} else {
			return (
				<div>{inputData.value}</div>
			)
		}
	}

    MapFormData() {
        const formdata = this.props.formdata
        const items = formdata.map((obj) => 
            <div className='user-info-item'>
                <div>{obj.title}</div>
                {this.GetInput(obj)}
            </div>
        );

        return items
    }

    render() {
        return(
            <>
                {this.MapFormData()}
				{this.props.children}
            </>
        );
    }
}