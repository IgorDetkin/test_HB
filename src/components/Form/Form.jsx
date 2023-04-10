import React, { useState } from "react";
import './Form.css';
import Input from '../Ui/input/Input';
import Checkbox from '../Ui/checkbox/Checkbox';
import Button from '../Ui/button/Button';
import Toggle from "../Ui/toggle/Toggle";
import Dropdown from "../Ui/dropdown/Dropdown";

function Form() {

    
    const [post, setPost] = useState(
        {
            name: '', 
            password: '', 
            text: '', 
            checkbox: false, 
            toggle: false,
            dropdownTitle: '',
        }    
    );





    const postForm = (event) => {
        event.preventDefault();
        let jsonPost = JSON.stringify(post);
        alert(jsonPost);
        setPost({name: '', password: '', text: '', checkbox: false, toggle: false, dropdownTitle: '',});
    }


    const clearForm = (event) => {
        event.preventDefault();
        setPost({name: '', password: '', text: '', checkbox: false, toggle: false, dropdownTitle: '',});
    }

    
  return (
    <form>
        <Input
            label="Username"
            value={post.name}
            onChange = {event => setPost({...post, name: event.target.value})}
            type="text" 
            placeholder="Enter username"
        />

        <Input
            label="Password"
            value={post.password}
            onChange = {event => setPost({...post, password: event.target.value})}
            type="text" 
            placeholder="Enter password"
        />

        <Input
            label="Input Text Label"
            value={post.text}
            onChange = {event => setPost({...post, text: event.target.value})}
            type="text" 
            placeholder="Type here"
        />

        <Checkbox
            type="checkbox"
            checked={post.checkbox}
            onChange={() => setPost({...post, checkbox: !(post.checkbox)})}
            name="Remember me"
        />

        <Toggle
            type="checkbox"
            checked={post.toggle}
            onChange={() => setPost({...post, toggle: !(post.toggle)})}
            name={post.toggle ? "On" : "Off"}
        />

        <Dropdown
            label="Dropdown Title"
            defaultValue="Dropdown option"
            value={post.dropdownTitle}
            // onChange={() => console.log(Dropdown)}
            onChange={event => setPost({...post, dropdownTitle: event.target.value})}
            options={[    
            {value: 'значение 1', name: 'Dropdown option 1'},
            {value: 'значение 2', name: 'Dropdown option 2'}
            ]}
        />



        <div className="">
            <Button
                onClick={clearForm}>Cancel
            </Button>

            <Button
                onClick={postForm}>Next
            </Button>
        </div>

    </form>
  )
}

export default Form