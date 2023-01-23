import React, { Component } from 'react';

export class ActionButton extends Component {
    constructor(props) {
        super(props)

        if (props.ButtonType) {
            this.ButtonType = this.props.ButtonType
        } else {
            this.ButtonType = 'action-button'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleClick(e){
        console.log("Click!")
        this.props.ClickFunction(this.props.data)
    }

    render() {
        return(
            <div 
                onClick = {this.handleClick} 
                className = {this.ButtonType}
                id = {this.props.id}>
                    {this.props.text}
            </div>
        );
    }
}