import React from 'react';
import './Toggle.css';

function Toggle(props) {

  const switcherClassName = (`toggle__switcher ${props.checked ? 'toggle__switcher' : 'toggle__switcher_deactive'}`);

  const shapeRoundClassname = (`toggle__shape-round ${props.checked ? 'toggle__shape-round' : 'toggle__shape-round_deactive'}`)

  return (
    <label className="toggle">
        <div className={switcherClassName}>
          <div className={shapeRoundClassname}>
            <input className="toggle__field"{...props}/>
          </div>
        </div>
        <p className="toggle__name">{props.name}</p>
    </label>
  )
}

export default Toggle 