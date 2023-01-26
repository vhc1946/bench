import React, { Component } from 'react';
import { ActionButton } from './Components/VHP/Buttons/ActionButton';
import { SpiffApp } from './SpiffApp';
import { TicketApp } from './TicketApp';

class Dock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='dock'>
                <ActionButton
                    text="Open Ticket App"
                    id="ticket-app-open"
                    ClickFunction = {this.props.ChangeApp}
                    data={0}
                />
                <ActionButton
                    text="Open Spiff App"
                    id="spiff-app-open"
                    ClickFunction = {this.props.ChangeApp}
                    data={1}
                />
            </div>
        )
    }
}

/**
 * Dock app class
 * TODO: Lift currentApp state out of dock and into App, so you can exit out of an app using the home button
 */
export class DockApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: true,
            Apps:[
                <TicketApp
                    ticket={this.props.ticket}
                />,
                <SpiffApp/>
            ],
            currentApp:2
        }
        
        this.ChangeApp = this.ChangeApp.bind(this)
        this.DisplayApp = this.DisplayApp.bind(this)
    }
    
    /**
     * Changes the state of the menu's current tab
     * Each time you define a menu bar in a component, include this function
     * @param {Number} TabID 
     */
    ChangeApp(AppID){
        this.setState({
            currentApp:AppID
        })
    }

    DisplayApp() {
        if (this.state.currentApp == 2) {
            return(<Dock ChangeApp = {this.ChangeApp}/>)
        } else {
            return(this.state.Apps[this.state.currentApp])
        }
    }

    render() {
        return(
            <>
                {this.DisplayApp()}
            </>  
        );
    }
}