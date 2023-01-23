import React, { Component } from 'react';
import { ActionButton } from '../Components/VHP/ActionButton';
import { MenuTabBar } from '../Components/VHP/MenuTabBar'

/**
 * Work Order Info Container
 * Stores and updates work order data
 */
export class TicketInfoContainer extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            active: true,
            Containers:[
                <WorkOrderInfo 
                    wo={this.props.ticket.wo}
                    UpdateTicket = {this.props.UpdateTicket}
                />,
                <ContractInfo 
                    contract={this.props.ticket.contract}
                />
            ],
            currentTab:0
        }

        this.SetTab = this.SetTab.bind(this)
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

    render() {
        return(
            <>
                <MenuTabBar 
                    tabs = {["WO Info", "Contract"]}
                    SetTab = {this.SetTab}
                    MenuStyle = "top-right-bar"
                />
                {this.state.Containers[this.state.currentTab]}
            </>
        );
    }
}


class WorkOrderInfo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className = "container">
                <div className = "wo-info-prop">
                    {this.props.wo.id}
                </div>
                <div className = "wo-info-prop">
                    {this.props.wo.contactname}
                </div>
                <div className = "wo-info-prop">
                    {this.props.wo.contactemail}
                </div>
            </div>
        )
    }
}

class ContractInfo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className = "container">
                <div className = "contract-info-prop">
                    {this.props.contract.pricelevel}
                </div>
                <div className = "contract-info-prop">
                    {this.props.contract.sys}
                </div>
                <div className = "contract-info-prop">
                    {this.props.contract.comp}
                </div>
            </div>
        )
    }
}