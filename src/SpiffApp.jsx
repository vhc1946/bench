import React, { Component } from 'react';
import { TableContainer } from './Components/VHP/Tables/DataTable/TableContainer';
import { MenuTabBar } from './Components/VHP/ViewControllers/MenuTabBar';
import {TestData} from './Data/TestData'

/**
 * Starter class for a main container. This sits below the title bar and tracks the current view
 * and all open containers
 * Containers are dynamically generated from props.
 */
export class SpiffApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: true,
            Containers:[
                <div style={{top:"180px", position:"absolute"}}>
                    Open
                    <TableContainer data = {TestData}/>
                </div>,
                <div style={{top:"180px", position:"absolute"}}>Active</div>,
                <div style={{top:"180px", position:"absolute"}}>Closed</div>
            ],
            currentTab:0
        }
        
        this.SetTab = this.SetTab.bind(this)
    }
    
    /**
     * Changes the state of the menu's current tab
     * Each time you define a menu bar in a component, include this function
     * @param {Number} TabID 
     */
    SetTab(TabID){
        this.setState({
            currentTab:TabID
        })
    }

    render() {
        return(
            <>
                <MenuTabBar 
                    tabs = {["Open", "Active", "Closed"]}
                    SetTab = {this.SetTab}
                    MenuStyle = "top-bar"
                />
                {this.state.Containers[this.state.currentTab]}
            </>
        );
    }
}