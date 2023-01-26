import React, { Component } from 'react';
import { ActionButton } from '../Buttons/ActionButton';
/**
 * A basic card titlebar which displays actions and a title
 */
export class CardTitlebar extends Component {
    constructor(props) {
        super(props)

        if (props.cardTitlebarClass) {
            this.cardTitlebarClass = "card-menubar" + ' ' + this.props.cardTitlebarClass
        } else {
            this.cardTitlebarClass = 'card-menubar'
        }

        this.state = {
			close: false,
			minimize:false
		}
    }

    /**
     * On mount, assign actions if they exist to the title bar
     */
    componentDidMount() {
        if (this.props.actions) {
            if (this.props.actions.close != null) {
                this.setState({close:true})
            }
            if (this.props.actions.minimize != null) {
                this.setState({minimize:true})
            }
        }
    }

    render() {
        return(
            <div className={this.cardTitlebarClass} id={this.props.id}>
                <div class = "card-title">
                    {this.props.title}
                </div>
                <div class = "card-actions">
                    {this.state.minimize&&<ActionButton 
                        ClickFunction = {this.props.actions.minimize}
                        ButtonType = "minimize-button"
                        text="-"
                        data = {this.props.data.minimize}
                    />}
                    {this.state.close&&<ActionButton 
                        ClickFunction = {this.props.actions.close}
                        ButtonType = "close-button"
                        text="X"
                        data = {this.props.data.close}
                    />}
                </div>
                
            </div>
        );
    }
}