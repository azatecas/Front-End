import React, { useState } from 'react';
import { axiosWithAuth } from '../../axiosAuth';

const CardEditing = props => {
    const [title, setTitle] = useState(props.name);
    const [desc, setDesc] = useState(props.category);
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
            props.push("/dashboard")
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Name: <input type="text" placeholder="Name" value={title} onChange={handleTitleChanges} style={{marginTop: '3%', marginBottom: '5%', marginRight: '5%'}}/></h1>
            <h4>Category: <input type="text" placeholder="Category" value={desc} onChange={handleDescChanges} style={{marginBottom: '5%', marginRight: '5%'}}/></h4>
            <button>Save</button>
        </form>
    )
}

export default CardEditing;