import React, { useState } from "react";
import './Form.css';
import Input from '../Ui/input/Input';
import Checkbox from '../Ui/checkbox/Checkbox';
import Button from '../Ui/button/Button';
import Toggle from "../Ui/toggle/Toggle";
import Dropdown from "../Ui/dropdown/Dropdown";
import Radio from "../Ui/radio/Radio";
import MaterialUI from "../Ui/MaterialUI/MaterialUI";
import CustomSelect from "../Ui/customSelect/CustomSelect";
import useValidation from "../../validation/validation";

function Form() {

    // const checkValid = useValidation();

    // const { nameTrue, passwordTrue, textTrue } = checkValid.errors; // это будет текстом ошибки в спане


    
    
   


    //чтобы открывать кастомный селект
    const [isVisibleSelect, setIsVisibleSelect] = useState(false);
    const visibleHandler = (event) => {
        event.stopPropagation() // если тут не ввести этот метод, то селект не будет открываться вообще.
        setIsVisibleSelect(!isVisibleSelect);
    }

    //чтобы закрывать кастомный селект по клику вне его
    const closeOverlayClick = (event) => {
        setIsVisibleSelect(false)
    };

    const [title, setTitle] = useState('Dropdown option');


    const [post, setPost] = useState(
        {
            name: '', 
            password: '', 
            text: '', 
            checkbox: false, 
            toggle: false,
            radioSelection: "none",
            dropdownSelect: 'none',
        }    
    );


    const postForm = (event) => {
        event.preventDefault();
        // console.log(post);
        let jsonPost = JSON.stringify(post , null, 2);
        alert(jsonPost);
        setTitle('Dropdown option'); // чтобы после отправки формы у селекта было изначальное имя
        setPost({
            name: '', 
            password: '', 
            text: '', 
            checkbox: false, 
            toggle: false, 
            radioSelection: "none", 
            dropdownSelect: 'none',
        });
        setIsvalid(false);
        
    }


    const clearForm = (event) => {
        event.preventDefault();
        setTitle('Dropdown option'); // чтобы после отправки формы у селекта было изначальное имя
        setPost({
            name: '', 
            password: '', 
            text: '', 
            checkbox: false, 
            toggle: false, 
            radioSelection: "none", 
            dropdownSelect: 'none'
        });
    }



    //функция для изменения значения селекта, отображаемого внешнего имени пункта 
    //выбранного в селекте закрытия после выбора нужного пункта.
    const testSelect = (event) => {
        setPost({...post, dropdownSelect: event.target.dataset.value})
        setTitle(event.target.outerText);
        visibleHandler(event);
    }

    const [isvalid, setIsvalid] = useState(false);

    const validHandler = (event) => {
        if(event.target.value === '') {
            setIsvalid(false);
        }

        else {
            setIsvalid(true);
        }
    }


    

    
  return (
    <form onClick={closeOverlayClick}>
        <Input
            label="Username"
            value={post.name || ''}
            onChange = {event => {
                validHandler(event);
                setPost({...post, name: event.target.value})
                }
            }
            type="text"
            placeholder="Enter username"
            // checkvalid={isvalid}
        />

        <Input
            label="Password"
            value={post.password || ''}
            onChange = {event => setPost({...post, password: event.target.value})}
            type="password" 
            placeholder="Enter password"
            // checkvalid={isvalid}
        />

        <Input
            label="Write your message"
            value={post.text || ''}
            onChange = {event => setPost({...post, text: event.target.value})}
            type="text" 
            placeholder="Write here, right now"
            // checkvalid={isvalid}
        />

        <Checkbox
            type="checkbox"
            checked={post.checkbox || ''}
            onChange={() => setPost({...post, checkbox: !(post.checkbox)})}
            name="Remember me"
        />

        <Toggle
            type="checkbox"
            checked={post.toggle || ''}
            onChange={() => setPost({...post, toggle: !(post.toggle)})}
            name={post.toggle ? "On" : "Off"}
        />

        


        <Radio
            type="radio"
            name="radiobuttons"
            checked={post.radioSelection == "button 1"}
            value="button 1"
            onChange={event => setPost({...post, radioSelection: event.target.value})}
            title='Radio 1'
        />

        <Radio
            type="radio"
            name="radiobuttons"
            checked={post.radioSelection == "button 2"}
            value="button 2"
            onChange={event => setPost({...post, radioSelection: event.target.value})}
            title='Radio 2'
        />

        <Radio
            type="radio"
            name="radiobuttons"
            checked={post.radioSelection == "button 3"}
            value="button 3"
            onChange={event => setPost({...post, radioSelection: event.target.value})}
            title='Radio 3'
        />

        <CustomSelect
            label="Dropdown menu"
            isVisibleSelect={isVisibleSelect}
            onClick={visibleHandler}
            title={title}
            onChange={testSelect}
        />




        <div className="form-buttons">
            <Button
                style={{color: "#7A5CFA", background: "#fff"}}
                onClick={clearForm}
            >Cancel
            </Button>

            <Button
                // disabled={!isvalid}
                style={{color: "#fff", background: "#7A5CFA"}}
                onClick={postForm}
            >Next
            </Button>
        </div>

    </form>
  )
}

export default Form;


        {/* <Dropdown
            label="Dropdown Title"
            value={post.dropdownTitle}
            onChange={event => setPost({...post, dropdownTitle: event.target.value})}
            // defaultValue="Dropdown option"
            options={[    
                {value: 'значение 1', name: 'Dropdown option 1'},
                {value: 'значение 2', name: 'Dropdown option 2'}
            ]}
        /> */}
