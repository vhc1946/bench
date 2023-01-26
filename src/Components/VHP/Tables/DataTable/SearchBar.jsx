import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Change event handler
     * Can optionally pass data using props.data
     */
    handleChange(e){
        this.props.FilterByText(e)
    }

    render() {
        return(
            <input 
                onChange = {this.handleChange} 
                className = "Search-Bar" 
                tag={this.props.tag}
                id = {this.props.id}>
                    {this.props.text}
            </input>
        );
    }
}