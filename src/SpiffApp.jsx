import React, { Component } from 'react';
import { DropDown } from './Components/VHP/Dropdowns/DropDown';
import { TableContainer } from './Components/VHP/Tables/DataTable/TableContainer';
import { MenuTabBar } from './Components/VHP/ViewControllers/MenuTabBar';
import {TestData} from './Data/TestData'
import { Droplist } from './Data/Droplist';

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
                <div style={{top:"60px", position:"absolute"}}>
                    <TableContainer data = {TestData}/>
                </div>,
                <div style={{top:"180px", left:"200px", position:"absolute"}}>
                    Active
                    <DropDown list={Droplist} selected={{text:"Select option", value:null}} searchable={true}/>
                </div>,
                <div style={{top:"180px", position:"absolute"}}>Closed</div>
            ],
            currentTab:0
        }
        
        this.SetTab = this.SetTab.bind(this)
    }

    /**
	 * Spiff App Functionality:
	 * 1. Filtering should apply across all tabs, so you can filter on one tab, switch tabs, and it will
	 * be filtered.
	 * 2. Buttons on each row expand with options, add support or create an expanded object.
	 * 
	 * 
     * Spiff App Layout:
     * 	<Header>
     * 		VOGEL COMMISION LOG
     * 	</Header>
	 * 	<CardContent> //Top card
	 * 		<InputForm>		//Search Form
	 * 			Search inputs [Tech ID, WO#, Client Name, Refered To, Address, Period(needs custom logic)]
	 * 		</InputForm>
	 * 		<StaticForm>
	 * 			Commission Data
	 * 		</Static Form>
	 * 		<Card>
	 * 			Whatever this card is for, idk
	 * 		</Card>
	 * 	</Card Content>
	 * 	<CardContent>
	 * 		<MenuTabBar>
	 * 			Approved, Lost, Open, Closed
	 * 		</MenuTabBar>
	 * 		{this.state.Containers[this.state.currentTab]} => {
	 * 			<Card>
	 * 				<RowHeader></RowHeader>
	 * 				<DataTable></DataTable>
	 * 			</Card>
	 * 		}
	 * 	</Card Content>
     */
    
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