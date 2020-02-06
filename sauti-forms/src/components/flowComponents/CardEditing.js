import React, { useState } from 'react';
import { axiosWithAuth } from '../../axiosAuth';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getFlow } from '../../actions';

const Button = styled.button`
    border: 2px solid black;
    padding: 2%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const CardEditing = props => {
    const [title, setTitle] = useState(props.flow.name);
    const [desc, setDesc] = useState(props.flow.category);
    const newTitle = {
        name: title,
        category: desc
    }
    const handleTitleChanges = e => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const handleDescChanges = e => {
        e.preventDefault();
        setDesc(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`https://sauti-studio-3.herokuapp.com/api/users/flows/${props.id}`, newTitle)
        .then(() => {
            props.setEditing(false)
            props.getFlow(props.id)
        })
        .catch(err => {
            console.log(err);
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Name: <input type="text" placeholder="Name" value={title} onChange={handleTitleChanges}/></h1>
            <h4>Category: <input type="text" placeholder="Category" value={desc} onChange={handleDescChanges}/></h4>
            <Button>Save</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        flow: state.flow
    }
}

export default connect(mapStateToProps, { getFlow })(CardEditing);