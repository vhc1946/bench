import React, { Component } from 'react';

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className = "header">
                <div className='header-text'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}