import "./Form.css";

const Form = () => {
    return (
        <form className="myForm">
            <label htmlFor="nameToMatch">Name</label>
            <br />
            <input id="nameToMatch" type="text" />
            <br />
            <button type="button">Add</button>
        </form>
    )
}

export default Form;