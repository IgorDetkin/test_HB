import React from 'react';
import './Radio.css'

function Radio(props) {
    const radioClassName = (`radio__field-wrapper ${props.checked ? 'radio__field-wrapper_active' : 'radio__field-wrapper'}`);

    return (
        // <label className="radio" {...props}>
        //     {props.radiobtns.map((radiobtn) => 
        //         <div key={radiobtn.value}>
        //             <input className="radio__field" value={radiobtn.value} name={props.name} type='radio' 
        //             // checked={props.checkstate === radiobtn.value} //работает, но пишет ошибку
        //             />
        //             <p className="radio__name">{radiobtn.name}</p>
        //         </div>
        //     )}
        // </label>



        <div className='radio'>
            <div className={radioClassName}>
                <input className="radio__field" {...props}/>
            </div>
            <p className="radio__name">{props.title}</p>
        </div>
    )
}

export default Radio;
