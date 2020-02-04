import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './FlowPage';

const Flow = props => {
    const state = {
        name: "",
        category: "",
        pages: []
    }
    const [root, setRoot] = useState("");
    const [flow, setFlow] = useState(state);
    const handleChanges = e => {
        e.preventDefault();
        setRoot(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
    }
    useEffect(() => {
        axios.get(`https://sauti-studio-3.herokuapp.com/api/users/flows/${props.match.params.id}`)
        .then(res => {
            console.log(res.data)
            setFlow(res.data);
        })
    },[])
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={root} onChange={handleChanges}/>
                <button>Add Root</button>
            </form>
            <div style={{border: '1px solid black', width: '300px', margin: '1%', padding: '2%'}}>
                <p>Name: {flow.name}</p>
                <p>Category: {flow.category}</p>
                {flow.pages.map(item => (
                    <FlowPage key={item.id} page={item}/>
                ))}
                <form>
                    <input type="text" placeholder="Add page"/>
                    <button>Add page</button>
                </form>
            </div>
        </div>
    )
}

export default Flow;