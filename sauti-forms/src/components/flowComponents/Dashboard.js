import React, { useState, useEffect } from 'react';
import FlowForm from './FlowForm';
import FlowCard from './FlowCard';
import axios from 'axios';

const Dashboard = props => {
    const [flows, setFlows ] = useState([])

    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    }

    useEffect(() => {
        const id = localStorage.getItem("id");
        axios.get(`https://sauti-studio-3.herokuapp.com/api/users/${id}/flows`)
        .then(res => {
            setFlows(res.data);
        })
    },[flows.length])
    return (
        <div>
            <h1>Sauti Studio</h1>
            <button onClick={logout} style={{marginBottom: '1.5%'}}>Log out</button>
            <FlowForm setFlows={setFlows}/>
            <FlowCard flows={ flows }/>
        </div>
    )

}

export default Dashboard;