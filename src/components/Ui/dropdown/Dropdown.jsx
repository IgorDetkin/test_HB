import React from 'react';
import './Dropdown.css';


function Dropdown(props) {

    
    return(
        <>
        <div className="dropdown">
            <p className="dropdown__name">{props.label}</p>
            <select className="dropdown__select" 
                {...props}
                // value={props.value}
                // onChange={evt => props.onChange(evt.target.value)}
            >
                <option className='dropdown__option' value='Значение 0'>Dropdown option</option>
                {props.options.map((option) => 
                    <option className='dropdown__option' key={option.value} value={option.value}>{option.name}</option>    
                )}
            </select>
        </div>
        </>
    )
}

export default Dropdown;