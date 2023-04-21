import React from 'react';
import './Checkbox.css';

function Checkbox(props) {
  const checkboxClassName = (`checkbox__wrapper ${props.checked ? 'checkbox__wrapper_active' : 'checkbox__wrapper'}`);
  return (
    <label className="checkbox">
      <div className={checkboxClassName}>
        <input className="checkbox__field" {...props}/>
      </div>
        <p className="chechbox__name">{props.name}</p>
    </label>
  )
}

export default Checkbox