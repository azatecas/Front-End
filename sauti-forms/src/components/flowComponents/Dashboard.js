import React from 'react';
import FlowForm from './FlowForm';
import FlowCard from './FlowCard';
import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid black;
    padding: .5%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const Dashboard = props => {

    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    }

    return (
        <div>
            <h1>Sauti Studio</h1>
            <Button onClick={logout} style={{marginBottom: '1.5%'}}>Log out</Button>
            <FlowForm />
            <FlowCard />
        </div>
    )

}

export default Dashboard;