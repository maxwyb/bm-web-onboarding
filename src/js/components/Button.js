// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.primary ? '#679AEC' : '#FFFFFF'};
    margin-left: 1em;
    letter-spacing: 1px;
    font-size: 1.25em;
    border-radius: 10px;
    height: 50px;
    border: 2px solid #689AEB;
    color: ${props => props.primary ? '#FFFFFF' : '#7EA9EE'};
`;

export default Button;

/*
class ButtonRaw extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}
*/

/*
const ButtonRaw = ({ className, children }) => (
    <button className={className}>
        {children}
    </button>
  )
*/