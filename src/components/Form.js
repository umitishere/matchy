import { useState } from "react";
import "./Form.css";

const Form = (props) => {

    const [inputName, setInputName] = useState('');
    const [groupSize, setGroupSize] = useState(0);

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const numberChangeHandler = (event) => {
        setGroupSize(event.target.value);
    }

    return (
        <form className="myForm">

            <label htmlFor="nameToMatch">Name</label>
            <br />
            <input id="nameToMatch" type="text" onChange={nameChangeHandler} />
            <br />

            <label htmlFor="groupSize">Group Size</label>
            <br />
            <input id="groupSize" type="number" onChange={numberChangeHandler} />
            <br />

            <button type="button" onClick={() => props.onSubmit(inputName)}>Add</button>
            <br />
        </form>
    )
}

export default Form;