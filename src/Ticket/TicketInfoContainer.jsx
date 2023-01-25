import React, { Component } from 'react';
import { ActionButton } from '../Components/VHP/Buttons/ActionButton';
import { MenuTabBar } from '../Components/VHP/ViewControllers/MenuTabBar'

/**
 * Work Order Info Container
 * Stores and updates work order data
 */
export class TicketInfoContainer extends Component {
    constructor(props) {
        super(props)
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
            <div className = "container" id = "wo-info-cont">
                <div className = "wo-info-prop">{this.props.wo.id}</div>
                <div className = "wo-info-prop">{this.props.wo.custcode}</div>

                <div class="container" id="wo-contact-cont">
                    <div className = "wo-info-prop">{this.props.wo.contactname}</div>
                    <div className = "wo-info-prop">{this.props.wo.contactphone}</div>
                    <input value={this.props.wo.contactemail}></input>
                    <div className = "wo-info-prop">{this.props.wo.street}</div>
                    <div className = "wo-info-prop">{this.props.wo.unit}</div>
                    <div className = "wo-info-prop">{this.props.wo.cityzip}</div>
                    <div className = "wo-info-prop">{this.props.wo.state}</div>
                </div>
                <div class = "container" id="wo-reference-cont">
                    <div>Sales Rep:</div><div className = "wo-info-prop">{this.props.wo.salesrep}</div>
                    <div>Taken By:</div><div className = "wo-info-prop">{this.props.wo.takenby}</div>
                    <div>Depart:</div><div className = "wo-info-prop">{this.props.wo.dept}</div>
                    <div>Category:</div><div className = "wo-info-prop">{this.props.wo.cat}</div>
                    <div>Reference:</div><div className = "wo-info-prop">{this.props.wo.ref}</div>
                    <div>Status:</div><div className = "wo-info-prop">{this.props.wo.status}</div>
                    <div>Job Ref.:</div><div className = "wo-info-prop">{this.props.wo.jobref}</div>
                    <div>Contract:</div><div className = "wo-info-prop">{this.props.wo.conref}</div>
                </div>
                <div class = "container" id="wo-pricing-cont">
                    <div>Price Book:</div><div className = "wo-info-prop">{this.props.wo.pricebook}</div>
                    <div>Price Level:</div>
                    <select value = {this.props.wo.pricelevel}>
                        <option value='STA'>STA</option>
                        <option value='CLA'>CLA</option>
                        <option value='PRE'>PRE</option>
                        <option value='ULT'>ULT</option>
                    </select>
                </div>
                <textarea>{this.props.wo.descr}</textarea>
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