import React, { useState, useEffect } from 'react';
import FlowPage from './FlowPage';
import { axiosWithAuth } from '../../axiosAuth';
import CardInfo from './CardInfo';
import CardEditing from './CardEditing';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getFlow } from '../../actions'

const Logout = styled.button`
    margin-bottom: 1.5;
    border: 2px solid black;
    padding: .5%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const Button = styled.button`
    border: 2px solid black;
    padding: 2%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const BorderBox = styled.div`
    border: 1px solid black;
    width: 300px;
    margin: 1%;
    padding: 2%;
    padding-top: .5%;
`

const Input1 = styled.input`
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 5%;
    padding: 1%;
`

const Input2 = styled.input`
    margin-bottom: 5%;
    margin-right: 5%;
    padding: 1%;
`

const Flow = props => {
    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    }
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
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
    }
    const deleteItem = e => {
        e.preventDefault();
        axiosWithAuth().delete(`https://sauti-studio-3.herokuapp.com/api/users/flows/${props.match.params.id}`)
        .then(() => {
            props.history.push("/dashboard")
        })
    }
    const editItem = e => {
        e.preventDefault();
        setEditing(true)
    }
    useEffect(() => {
        props.getFlow(props.match.params.id)
    },[props.match.params.id])
    return(
        <div>
            <h1>Sauti Studio</h1>
            <Logout onClick={logout}>Log out</Logout>
            <BorderBox>
                {isEditing ? <CardEditing id={props.match.params.id} push={props.history.push}/> : <CardInfo />}
                {props.flow.pages.map(item => (
                    <FlowPage key={item.id} page={item}/>
                ))}
                {isEditing ? null : <Button onClick={editItem}>Edit</Button>}
                <form onSubmit={handleSubmit}>
                    <Input1 type="text" placeholder="Title" value={title} onChange={handleTitleChanges}/>
                    <Input2 type="text" placeholder="Description" value={desc} onChange={handleDescChanges}/>
                    <Button>Add page</Button>
                </form>
                <Button onClick={deleteItem}>Delete</Button>
            </BorderBox>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        flow: state.flow
    }
}

export default connect(mapStateToProps, { getFlow })(Flow);