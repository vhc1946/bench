import React, { Component } from 'react';

/**
 * Input component which takes a search function with an optional key and returns filtered data.
 */
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
        this.props.FilterByText(e, this.props.searchKey)
    }

    render() {
        return(
            <input 
                onChange = {this.handleChange} 
                className = "Search-Bar"
                id = {this.props.id}>
            </input>
        );
    }
}