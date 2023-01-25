import React, { Component } from 'react';
import { MenuTabBar } from './Components/VHP/ViewControllers/MenuTabBar';

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
                <div>Open</div>,
                <div>Active</div>,
                <div>Closed</div>
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
                {this.state.Containers[this.state.currentTab]}
                <MenuTabBar 
                    tabs = {["Open", "Active", "Closed"]}
                    SetTab = {this.SetTab}
                    MenuStyle = "bottom-bar"
                />
            </>
        );
    }
}