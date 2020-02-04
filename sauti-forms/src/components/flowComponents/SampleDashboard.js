import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FlowForm from './FlowForm';
import FlowCard from './FlowCard';


const SampleDashboard = () => {
    const [menu, setMenu ] = setState([
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
        setMenu([...menu, newMenu]);
    }

    return (
        <div>
            <h1>My Menu</h1>
            <FlowForm addNewMenuItem = { addNewMenuItem } />
            <FlowCard menu={ menu }/>
        </div>
    )

}

import default SampleDashboard;