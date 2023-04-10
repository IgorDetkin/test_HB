import React from 'react';
import './Checkbox.css';

function Checkbox(props) {
  return (
    <label      
        className="checkbox" for
    >
        <input className="checkbox__field" {...props}/>
        <p className="chechbox__name">{props.name}</p>
    </label>
  )
}

export default Checkbox