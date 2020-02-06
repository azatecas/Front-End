import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { deletePage } from '../../actions';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../axiosAuth';

const Button = styled.button`
    border: 2px solid black;
    padding: 2%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between
`

const Box = styled.div`
    overflow-wrap: break-word;
    border: 2px solid black;
    width: 300px;
    margin-bottom: 2%;
    margin-top: 5%;
    padding: 3%;
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

const FlowPage = props => {
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.page.name);
    const [desc, setDesc] = useState(props.page.content);
    const newPage = {
        name: title,
        content: desc
    }
    const handleTitleChanges = e => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const handleDescChanges = e => {
        e.preventDefault();
        setDesc(e.target.value);
    }
    const editItem = e => {
        e.preventDefault();
        setEditing(true)
    }
    const saveItem = e => {
        e.preventDefault();
        setEditing(false);
        axiosWithAuth().put(`https://sauti-studio-3.herokuapp.com/api/users/pages/${props.page.id}`, newPage)
    }
    const deleteItem = e => {
        e.preventDefault();
        props.deletePage(props.page.id);
    }
    useEffect(() => {
        axiosWithAuth().get(`https://sauti-studio-3.herokuapp.com/api/users/pages/${props.page.id}`)
        .then(res => {
            setTitle(res.data.name)
            setDesc(res.data.content)
        })
    },[isEditing])
    return(
        <Box>
            {isEditing ?
            <>
                <Input1 type="text" placeholder="Title" value={title} onChange={handleTitleChanges}/>
                <Input2 type="text" placeholder="Description" value={desc} onChange={handleDescChanges}/>
            </>
            :
            <>
                <p>Page name: {newPage.name}</p>
                <p>Page content: {newPage.content}</p>
            </>}
            {isEditing ? 
            <Buttons>
                <Button onClick={saveItem}>Save</Button>
                <Button onClick={deleteItem}>Delete</Button>
            </Buttons>
            :
            <Buttons>
                <Button onClick={editItem}>Edit</Button>
                <Button onClick={deleteItem}>Delete</Button>
            </Buttons>}
        </Box>
    )
}

export default connect(null, { deletePage })(FlowPage);