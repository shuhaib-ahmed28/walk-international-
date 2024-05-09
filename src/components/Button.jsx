import React from 'react';
import App from '../App.css';

const Button = (props) => {
    return (
        <div>
            <button className='btnname' style={props.style} > {props.btnname}{props.btnn} </button>
        </div>
    );
};

export default Button;