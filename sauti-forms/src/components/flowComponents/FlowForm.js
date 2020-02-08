import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFlow } from '../../actions';

const Button = styled.button`
    border: 1px solid #1B73C1;
    padding: 1.5%;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #1B73C1;
    font-size: 40px;
    color:white;
    text-decoration: strong;
    &:hover {
        background-color: #0C5698 ;
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
        <div className="form-container">
            <form onSubmit={ submitForm } className="flow-form">
                <div className="inputs">
                    <label htmlFor='name'>Name: </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleChanges}
                            placeholder="Tomatoes"
                            value={item.name}
                            // style={{marginRight: '1%'}}
                            required
                        />
                    <label htmlFor='category'>Category: </label>
                        <input
                            id="category"
                            type="text"
                            name="category"
                            value={item.category}
                            onChange={handleChanges}
                            placeholder="Food"
                        />
                </div>
                <div className="submit-btn">
                    <Button type="submit">+</Button>
                </div>
                
            </form>
        </div>
    )
}

export default connect(null, { addFlow })(FlowForm);