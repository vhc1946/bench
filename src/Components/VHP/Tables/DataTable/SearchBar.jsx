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
            <div>
                <input 
                    onChange = {this.props.FilterByText} 
                    className = "Search-Bar" 
                    tag={this.props.tag}
                    id = {this.props.id}>
                        {this.props.text}
                </input>
            </div>
        );
    }
}