import React, { Component } from 'react';

export class TableRow extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * Returns a row created from props.data
     * @returns render object
     */
    render() {
        return(
            <div className = "tablerow">
                {Object.keys(this.props.data).map((keyName, i) => (
                    <div key = {keyName} className={keyName}>{this.props.data[keyName]}</div>
                ))}
            </div>
        );
    }
}