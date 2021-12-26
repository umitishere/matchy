import "./Form.css";

const Form = () => {
    return (
        <form className="myForm">
            <label htmlFor="nameToMatch">Name</label>
            <br />
            <input id="nameToMatch" type="text" />
        </form>
    )
}

export default Form;