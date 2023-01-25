import React, { Component } from 'react';

export class TextInput extends Component {
    constructor(props) {
        super(props)

        if (props.inputClass) {
            this.inputClass = "text-input" + ' ' + this.props.inputClass
        } else {
            this.inputClass = 'text-input'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleChange(e){
        this.props.ChangeFunction(e.target.value, this.props.data)
    }

    render() {
        return(
            <input 
                onChange = {this.handleChange} 
                className = {this.inputClass}
                id = {this.props.id}
                value = {this.props.value}
                type = {this.props.type}
                data = {this.props.data}
            />
        );
    }
}