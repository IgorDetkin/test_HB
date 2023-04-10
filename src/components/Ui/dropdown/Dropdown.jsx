import React from 'react'

function Dropdown({children, ...props}) {
    return(
        <>
        <div className="dropdown">
            <p className="dropdown__name">{props.label}</p>
            <select className="dropdown__select" {...props}>
                <option value="">{props.defaultValue}</option>
                {props.options.map((option) => 
                    <option key={option.value} value={option.value}>{option.name}</option>    
                )}
            </select>
        </div>
        </>
    )
}

export default Dropdown