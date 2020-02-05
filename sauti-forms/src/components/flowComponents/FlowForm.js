import React, { useState } from "react";
import { axiosWithAuth } from "../../axiosAuth";

const FlowForm = (props) => {

    const [item, setItem] = useState({
        name: "",
        category: ""
    });

    const handleChanges = e => {
        setItem({ ...item, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        const id = localStorage.getItem("id");
        axiosWithAuth().post(`https://sauti-studio-3.herokuapp.com/api/users/${id}/flows`, item)
        .then(() => {
            props.setFlows([
                {
                    id: 1,
                    name: "",
                    category: ""
                }
            ])
        })
      };


    return (
        <form onSubmit={ submitForm }>
            <label htmlFor='name'>Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                placeholder="Name"
            />
            <label htmlFor='category'>Category: </label>
            <input
                id="category"
                type="text"
                name="category"
                onChange={handleChanges}
                placeholder="Category"
            />

            <button type="submit">Add Note</button>
        </form>
    )
}

export default FlowForm;