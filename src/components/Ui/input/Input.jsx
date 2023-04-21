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

  const errorValidClassName = (`input__sub-message ${props.checkvalid === true ? 'input__sub-message' : 'input__sub-message_error'}`);


  return (
    <>
    <label  className="input">
        <p className="input__name">{props.label}</p>
        <input className="input__field" {...props}
        />
        {/* <span 
          // onChange={props.checkValid}
          className={errorValidClassName} 
        >Заполните поле
        </span> */}
    </label>
    </>
  )
}

export default Input;