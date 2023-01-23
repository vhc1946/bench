import React, { Component } from 'react';
import { ActionButton } from '../ActionButton';
import { Data2 } from '../../TestData2';
import { SearchBar } from './SearchBar';

export class ActionRow extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * Returns an Action Row
     * @returns render object
    */
    render() {
        return(
            <div className = "actionrow">
                <ActionButton 
                    text = {"Update Data"} 
                    ClickFunction = {this.props.UpdateFunction}
                    data = {Data2}
                />
                <SearchBar
                    FilterByText = {this.props.FilterByText}
                />
                <ActionButton 
                    text="Close Table" 
                    ClickFunction = {this.props.CloseFunction}
                />
            </div>
        );
    }
}