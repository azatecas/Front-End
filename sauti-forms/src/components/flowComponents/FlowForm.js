import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFlow } from '../../actions';

const Button = styled.button`
    border: 2px solid black;
    padding: .5%;
    margin-left: 1%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

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
        props.addFlow(item);
        e.target.reset();
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
                style={{marginRight: '1%'}}
            />
            <label htmlFor='category'>Category: </label>
            <input
                id="category"
                type="text"
                name="category"
                onChange={handleChanges}
                placeholder="Category"
            />

            <Button type="submit">Add Note</Button>
        </form>
    )
}

export default connect(null, { addFlow })(FlowForm);