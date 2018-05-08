// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Button from './Button';

type ButtonType = 'login' | 'logout' | 'signup';
type PropsType = {
    isLoggedIn: boolean,
    override?: ButtonType,
};

function LogInButton(props: PropsType) {

    const alertAction = () => {
        if (props.override) {
            window.alert("LogInButton text overridden: " + props.override);
        } else {
            window.alert(props.isLoggedIn ? "Logging Out Now" : "Logging In Now");
        }
    }

    return (
        <Button primary onClick={ alertAction }>
            { props.override ? props.override : (props.isLoggedIn ? "Log Out" : "Log In") }
        </Button>
    )
}

LogInButton.defaultProps = {
    isLoggedIn: false
}

export default LogInButton;

/*
class LogInButtonRaw extends React.Component {
    constructor(props) {
        super(props);
    }
}
*/

/*
const LogInButtonRaw = ({ isLoggedIn, override, className, children }) => (
    <button className={className}>
        { override ? (isLoggedIn ? "Log Out" : "Log In") : override }
        { children }
    </button>
);
*/

/*
const LogInButton = styled(LogInButtonRaw)`
    background: #679AEC;
    margin-left: 1em;
    letter-spacing: 1px;
    font-size: 1.25em;
    color: white;
    border-radius: 10px;
    height: 50px;
`;
*/