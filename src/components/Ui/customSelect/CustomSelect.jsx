import React, { useState } from "react";
import './CustomSelect.css'

function CustomSelect(props) {
    
    const visibleSelectClassname = (`select__list ${!props.isVisibleSelect ? 'select__list' : 'select__list_visible'}`);
    const arrowDirectionClassname = (`select__button ${!props.isVisibleSelect ? 'select__button' : 'select__button_open'}`);

    // function getNewSelectTitle(event) {
    //     event.preventDefault();
    //     setTitle(event.target.outerText);
    //     setIsVisibleSelect(false);
    //     // console.dir(event.target)
    //     // console.log(event.target.dataset.value);
    // }

  return (
    <div className="select">
        <p className="select__name">{props.label}</p>
        <button 
            type='button' 
            className={arrowDirectionClassname}
            onClick={props.onClick}
        >{props.title}</button>
        <ul className={visibleSelectClassname} onClick={props.onChange}>
            <li className="select__list-item" data-value="value_1" >Option 1</li>
            <li className="select__list-item" data-value="value_2" >Option 2</li>
            <li className="select__list-item" data-value="value_3" >Option 3</li>
        </ul>
    </div>
  )
}

export default CustomSelect;
