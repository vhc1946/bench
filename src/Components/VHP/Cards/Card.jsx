import React, { Component } from 'react';
import { CardContent } from './CardContent';
import { CardTitlebar } from './CardTitlebar';

/**
 * A basic card class for displaying content. Card will fill it's content with the provided children.
 * Card options:
 * 		titlebar {bool}  : whether a card will display a title bar
 * 		actions {object} : collection of functions which control actions. set to null to hide action button
 * 		title {string}   : string title to display in the title bar
 */
export class Card extends Component {
    constructor(props) {
        super(props)

        if (props.cardClass) {
            this.cardClass = "card" + ' ' + this.props.cardClass
        } else {
            this.cardClass = 'card'
        }
		console.log(this.props.titlebar)
    }

    render() {
        return(
            <div className={this.cardClass} id={this.props.id}>
				{this.props.titlebar&&<CardTitlebar title={this.props.title} actions = {this.props.actions}/>}
				<CardContent>
					{this.props.children}
				</CardContent>
            </div>
        );
    }
}