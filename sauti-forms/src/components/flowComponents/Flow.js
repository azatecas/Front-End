import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './FlowPage';
import { axiosWithAuth } from '../../axiosAuth';
import CardInfo from './CardInfo';
import CardEditing from './CardEditing';

const Flow = props => {
    const state = {
        name: "",
        category: "",
        pages: []
    }
    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    }
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [flow, setFlow] = useState(state);
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
        axios.get(`https://sauti-studio-3.herokuapp.com/api/users/flows/${props.match.params.id}`)
        .then(res => {
            setFlow(res.data);
        })
    },[props.match.params.id])
    return(
        <div>
            <h1>Sauti Studio</h1>
            <button onClick={logout} style={{marginBottom: '1.5%'}}>Log out</button>
            <div style={{border: '1px solid black', width: '300px', margin: '1%', padding: '2%', paddingTop: '.5%'}}>
                {isEditing ? <CardEditing id={props.match.params.id} push={props.history.push} name={flow.name} category={flow.category}/> : <CardInfo name={flow.name} category={flow.category}/>}
                {flow.pages.map(item => (
                    <FlowPage key={item.id} page={item}/>
                ))}
                {isEditing ? null : <button onClick={editItem}>Edit</button>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={handleTitleChanges} style={{marginTop: '5%', marginBottom: '5%', marginRight: '5%'}}/>
                    <input type="text" placeholder="Description" value={desc} onChange={handleDescChanges} style={{marginBottom: '5%', marginRight: '5%'}}/>
                    <button>Add page</button>
                </form>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default Flow;