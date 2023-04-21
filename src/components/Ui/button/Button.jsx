import React from 'react';
import './Button.css'

function Button({children, ...props}) {
  
  const activeClassName = (`button ${!props.disabled ? 'button' : 'button_disabled'}`);

  
  return (
    <button 
      className={activeClassName} 
      {...props}
    >
        {children}
    </button>
  )
}

export default Button;