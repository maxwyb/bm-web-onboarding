import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {
    isLoggedIn: boolean
};
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

const LogInButtonRaw = (props: Props) => (
    <button className={props.className} onClick={() => { window.alert("LogInButton clicked.") }}>
        { props.override ?  props.override : (props.isLoggedIn ? "Log Out" : "Log In") }
        { props.children }
    </button>
);

const LogInButton = styled(LogInButtonRaw)`
    background: #679AEC;
    display: inline-block;
    margin-left: 1em;
    letter-spacing: 1px;
    font-size: 1.25em;
    font-weight: 300;
    color: white;
    border-style: solid;
    border-width: 0.25px;
    border-radius: 10px;
    height: 50px;
`;

export default LogInButton;