import React, { Component } from 'react';
import { ActionButton } from './ActionButton';
import { DataTable } from './RepairTable/DataTable';

export class TableContainer extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;

        this.state = {
            visible:false,
            data:props.data||[],
            filtered:false
        }

        /**
         * Bind functions here for access in child components.
         */
        this.ToggleTable = this.ToggleTable.bind(this)
        this.UpdateData = this.UpdateData.bind(this)
    }

    /////////TABLE FUNCTIONS/////////////////
    /**
     * Toggle visibility of the table.
     */
    ToggleTable(set){
        if (set) {
            this.setState({
                visible:set
            });
        } else {
            this.setState({
                visible:!this.state.visible
            });
        }

    }

    /**
     * Sets the state of the data object used in the data table.
     * Passing null into the object resets the data to the initial data passed in as props.
     * @param {object} newData : object this.state.data is set to
     */
    UpdateData(newData) {
        console.log(newData)
        if (newData == null || newData == undefined) {
            this.setState({
                data:this.props.data
            })
        } else {
            this.setState({
                data:newData
            })
        }
    }
    /////////////END FUNCTIONS///////////////////

    render() {
        return(
            <div className = "container" id = {this.id}>
                <ActionButton
                    text = {"Open Repair List"}
                    ClickFunction = {this.ToggleTable}
                />
                <DataTable
                    visible = {this.state.visible}
                    data = {this.state.data}
                    id = "repair-table-cont"
                    ToggleTable = {this.ToggleTable}
                    UpdateData = {this.UpdateData}
                />
            </div>
        );
    }
}
