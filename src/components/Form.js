import { useState } from "react";
import "./Form.css";

const Form = (props) => {

    const [inputName, setInputName] = useState('');

    const inputChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    return (
        <form className="myForm">
            <label htmlFor="nameToMatch">Name</label>
            <br />
            <input id="nameToMatch" type="text" onChange={inputChangeHandler} />
            <br />
            <button type="button" onClick={() => props.onSubmit(inputName)}>Add</button>
            <br />
        </form>
    )
}

export default Form;