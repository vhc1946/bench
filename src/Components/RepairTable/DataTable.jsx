import React, { Component } from 'react';
import { ActionRow } from './ActionRow';
import { TableRow } from './TableRow';

export class DataTable extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;
        this.FilterByText = this.FilterByText.bind(this)
    }

    /**
     * Filters this.props.data based on the input
     * May move this into the search bar itself
     * @param {event} e : JS change event passed from Search Bar
     */
    FilterByText(e) {
        let newData = null;
        if (e.target.value == "") {
            newData = null
        } else {
            newData = []
            for (let obj in this.props.data) {
                //Search through the properties of each object
                for (let key in this.props.data[obj]) {
                    //console.log(key, this.props.data[obj][key])
                    if (this.props.data[obj][key].includes(e.target.value.toLowerCase())) {
                        console.log(this.props.data[obj][key], " MATCHES")
                        newData.push(JSON.parse(JSON.stringify(this.props.data[obj]))) //Push clone of object to new array
                        break;
                    }
                }
            }
        }
        this.props.UpdateData(newData)
    }

    /**
     * Conditional render to allow container to be toggled
     * @returns render object
     */
    render() {
        if (this.props.visible == false) {
            return null
        } else {
            return(
                <div className = "container" id = {this.id}>
                    <ActionRow 
                        CloseFunction = {this.props.ToggleTable}
                        UpdateFunction = {this.props.UpdateData}
                        FilterByText = {this.FilterByText}
                    />
                    {this.props.data.map((val, key) => {
                        return (
                            <TableRow data={val}></TableRow>
                        )
                    })}
                </div>
            );
        }
    }
}