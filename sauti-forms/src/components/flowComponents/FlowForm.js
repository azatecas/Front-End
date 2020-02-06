import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFlow } from '../../actions';

const Button = styled.button`
    border: 2px solid black;
    padding: 1.5%;
    margin-left: 3%;
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
        setItem({
            name: "",
            category: ""
        })
      };


    return (
        <form onSubmit={ submitForm } style={{border: "2px solid black", width: '800px', padding: '2%'}}>
            <label htmlFor='name'>Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                placeholder="Name"
                value={item.name}
                style={{marginRight: '1%'}}
                required
            />
            <label htmlFor='category'>Category: </label>
            <input
                id="category"
                type="text"
                name="category"
                value={item.category}
                onChange={handleChanges}
                placeholder="Category"
            />

            <Button type="submit">Add Flow</Button>
        </form>
    )
}

export default connect(null, { addFlow })(FlowForm);