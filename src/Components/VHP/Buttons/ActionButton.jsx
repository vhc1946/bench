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
        this.RenderButton = this.RenderButton.bind(this)
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleClick(e){
        this.props.ClickFunction(this.props.data)
    }

    RenderButton() {
        if (this.props.buttonClass == undefined) {
            return(
                <div 
                    onClick = {this.handleClick} 
                    className = {this.ButtonType}
                    id = {this.props.id}>
                        {this.props.text}
                </div>
            );
        } else {
            return(
                <div 
                    onClick = {this.handleClick} 
                    className = {this.ButtonType + " " + this.props.buttonClass}
                    id = {this.props.id}>
                        {this.props.text}
                </div>
            );
        }
    }

    render() {
        return(this.RenderButton())
    }
}