import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                name="name"
                id="name"
                type="text"
                placeholder="name"
                onChange={changeHandler}
                value={member.name}
            /><br />
            <label htmlFor="email">Email</label>

        </form>
    )
}
export default Form