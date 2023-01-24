import React, { Component } from 'react';

export class TextInput extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleChange(e){
        this.props.ChangeFunction(e.target.value)
    }

    render() {
        return(
            <input 
                onChange = {this.handleChange} 
                className = "text-input" 
                id = {this.props.id}
                value = {this.props.value}
                type = {this.props.type}
            />
        );
    }
}