import React, { Component } from 'react';

export class TableRow extends Component {
    constructor(props) {
        super(props)

        if (this.props.rowType == "header") {
            this.rowClass = "tablerow-header"
        } else {
            this.rowClass = "tablerow"
        }
    }

    /**
     * Returns a row created from props.data
     * @returns render object
     */
    render() {
        return(
            <div className = {this.rowClass} id = {this.props.id}>
                {Object.keys(this.props.data).map((keyName, i) => (
                    <div key = {keyName} className={keyName}>{this.props.data[keyName]}</div>
                ))}
            </div>
        );
    }
}