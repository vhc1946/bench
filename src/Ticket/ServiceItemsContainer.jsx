import React, { Component } from 'react';
import { ActionButton } from '../Components/VHP/ActionButton';
import { MenuTabBar } from '../Components/VHP/MenuTabBar'
import { Ticket } from '../Data/Ticket'

//Want to generate this dynamically, but for now I don't care to
let RepairInfo = [
    Ticket.sitems[0].descr,
    Ticket.sitems[1].descr,
    Ticket.sitems[2].descr,
    Ticket.sitems[3].descr
]

/**
 * Service Info Container
 * Stores and updates service item info and repairs
 * Currently, changing views will restore the selected view (but not any modified data)
 * to its default. If this behavior is undesired - and it likely would be for certain things - we
 * could move the state up or track it using context.
 */
export class ServiceItemsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: true,
            selectedItem:0,
            Containers:[
                <ServiceItemInfo 
                    sitems={this.props.ticket.sitems}
                    selectedItem={0}
                />,
                <RepairsForm 
                    repairs={this.props.ticket.repairs}
                    selectedItem={0}
                />
            ],
            currentTab:0
        }

        this.SetTab = this.SetTab.bind(this)
        this.ChangeServiceItem = this.ChangeServiceItem.bind(this)
    }
    
    /**
     * Changes the state of the menu's current tab
     * @param {Number} TabID 
     */
    SetTab(TabID){
        this.setState({
            currentTab:TabID
        })
    }

    /**
     * Changes the currently selected service item and re-renders the view
     * @param {Number} ServiceItemID 
     */
    ChangeServiceItem(ServiceItemID){
        this.setState({
            Containers:[
                <ServiceItemInfo 
                    sitems={this.props.ticket.sitems}
                    selectedItem={ServiceItemID}
                />,
                <RepairsForm 
                    repairs={this.props.ticket.repairs}
                    selectedItem={ServiceItemID}
                />
            ], 
        })
    }

    render() {
        return(
            <>
                <MenuTabBar 
                    tabs = {RepairInfo}
                    SetTab = {this.ChangeServiceItem}
                    MenuStyle = "top-left-bar dropdown"
                />
                <MenuTabBar 
                    tabs = {["Information", "Repairs"]}
                    SetTab = {this.SetTab}
                    MenuStyle = "top-right-bar"
                />
                {this.state.Containers[this.state.currentTab]}
            </>
        );
    }
}


class ServiceItemInfo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className = "container">
                <div>Service items!</div>
                <div>{this.props.sitems[this.props.selectedItem].descr}</div>
            </div>
        )
    }
}

class RepairsForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className = "container">
                <div>Repairs!</div>
                <div>Repair performed:</div>
                <div>{this.props.repairs[this.props.selectedItem].descr}</div>
            </div>
        )
    }
}