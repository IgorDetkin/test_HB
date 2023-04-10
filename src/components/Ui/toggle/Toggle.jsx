import React from 'react';
import './Toggle.css';

function Toggle(props) {

  const switcherClassName = (`toggle__switcher ${props.checked ? 'toggle__switcher' : 'toggle__switcher_deactive'}`);

  return (
    <label className="toggle">
        <div className={switcherClassName}>
         <input className="toggle__field"{...props}/>
        </div>
        <p className="toggle__name">{props.name}</p>
    </label>
  )
}

export default Toggle