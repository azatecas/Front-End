import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FlowForm from './FlowForm';
import FlowCard from './FlowCard';
import axios from 'axios';

const Dashboard = props => {
    const [menus, setMenus ] = useState([
        {
            id: 1,
            menuItem: 'Sample Menu item',
            itemContent: 'Sample Item'
        }
    ])

    const addNewMenuItem = param => {
        const newMenu = {
            id: Date.now,
            menuItem: param.menuItem,
            itemContent: param.itemContent
        };
        setMenus([...menus, newMenu]);
    }
    useEffect(() => {
        axios.get(`https://sauti-studio-3.herokuapp.com/api/users/${props.match.params.id}/flows`)
        .then(res => {
            console.log(res.data)
            setMenus(res.data);
        })
    },[])
    return (
        <div>
            <h1>My Menu</h1>
            <FlowForm addNewMenuItem = { addNewMenuItem } />
            <FlowCard menus={ menus }/>
        </div>
    )

}

export default Dashboard;