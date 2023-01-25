import React, { Component } from 'react';

/**
 * A container for holding card content.
 */
export class FloatContainer extends Component {
    constructor(props) {
        super(props)

        if (props.cardContentClass) {
            this.floatClass = "float-container" + ' ' + this.props.floatClass
        } else {
            this.floatClass = "float-container"
        }
    }

    render() {
        return(
            <div className={this.floatClass} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}