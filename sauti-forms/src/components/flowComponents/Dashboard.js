import React from 'react';
import FlowForm from './FlowForm';
import FlowCard from './FlowCard';
import styled from 'styled-components';
import NavBar from './NavBar';

const Button = styled.button`
    border: 2px solid black;
    padding: .5%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

const Box = styled.div`
    padding: 2%
`

const Dashboard = props => {

    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        props.history.push("/");
    }

    return (
        <div>
            <Box>
                <NavBar />
                <Button onClick={logout} style={{marginBottom: '1.5%'}}>Log out</Button>
                <FlowForm />
                <FlowCard />
            </Box>
        </div>
    )

}

export default Dashboard;