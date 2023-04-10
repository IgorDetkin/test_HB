import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <>
    <label  className="input">
        <p className="input__name">{props.label}</p>
        <input className="input__field" {...props}/>
        <span 
            className="input__sub-message" 
            onChange=""
        >Your password is between 4 and 12 characters
        </span>
    </label>
    </>
  )
}

export default Input;