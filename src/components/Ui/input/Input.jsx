import React, { useState } from "react";
import './Input.css';

function Input(props) {

  // console.log(props.value);
  // const [valid, setValid] = useState(false);

  // function huiblya() {
  //   if(props.value === '') {
  //     console.log('true')
  //   }
  //   else {
  //     console.log('false')
  //   }
  // }

  // const errorValidClassName = (`input__sub-message ${valid ? 'input__sub-message' : 'input__sub-message_error'}`) 


  return (
    <>
    <label  className="input">
        <p className="input__name">{props.label}</p>
        <input className="input__field" {...props}
        />
        {/* <span 
          onChange={huiblya}
          className={errorValidClassName} 
        >Your password is between 4 and 12 characters
        </span> */}
    </label>
    </>
  )
}

export default Input;