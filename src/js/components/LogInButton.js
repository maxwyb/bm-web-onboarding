import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {
    isLoggedIn: boolean
};

const LogInButtonRaw = (props: Props) => (
    <button className={props.className} onClick={() => { window.alert("LogInButton clicked.") }}>
        { props.override ?  props.override : (props.isLoggedIn ? "Log Out" : "Log In") }
        { props.children }
    </button>
);

const LogInButton = styled(LogInButtonRaw)`
    background: #679AEC;
    margin-left: 1em;
    letter-spacing: 1px;
    font-size: 1.25em;
    color: white;
    border-radius: 10px;
    height: 50px;
`;

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