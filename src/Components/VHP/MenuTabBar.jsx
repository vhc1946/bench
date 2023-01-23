import React, { Component } from 'react';
import { ActionButton } from './ActionButton';

/**
 * Creates a row of buttons for a menu bar
 * This would emulate the menu tab we used for switching between tabs
 * We should be able to use this as a base class and emulate most of our
 * menu styles with simply CSS
 * Note the menu bar doesn't care what the view is - it's simply a collection of buttons that tells its
 * parent when to act. What its parent does, does not matter to the menu.
 */
export class MenuTabBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <div className = {this.props.MenuStyle}>
                    {this.props.tabs.map((val, key) => {
                        return (
                            <ActionButton 
                                key = {key} 
                                data={key}
                                text={this.props.tabs[key]}
                                ButtonType = "menu-button"
                                ClickFunction = {this.props.SetTab}
                            />
                        )
                    })}
                </div>
            </>
        );
    }
}