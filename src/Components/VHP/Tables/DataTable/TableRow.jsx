import React, { Component } from 'react';

export class TableRow extends Component {
    constructor(props) {
        super(props)

        if (this.props.rowType == "header") {
            this.rowClass = "tablerow-header"
        } else {
            this.rowClass = "tablerow"
        }

        this.MapData = this.MapData.bind(this)
    }

    MapData(keyName) {
        if (this.props.headers == undefined|| keyName in this.props.headers) {
            return(
                <div key = {keyName} className={keyName}>{this.props.data[keyName]}</div>
            )
        }
    }

    /**
     * {Object.keys(this.props.data).map((keyName, i) => (
                    <div key = {keyName} className={keyName}>{this.props.data[keyName]}</div>
                ))}
     */

    /**
     * Returns a row created from props.data
     * @returns render object
     */
    render() {
        return(
            <div className = {this.rowClass} id = {this.props.id}>
                {Object.keys(this.props.data).map((keyName, i) => (
                    this.MapData(keyName)
                ))}
            </div>
        );
    }
}