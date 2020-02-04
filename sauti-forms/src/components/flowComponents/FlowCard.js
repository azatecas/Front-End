import React, { useState } from "react";
import { Link } from 'react-router-dom';

const FlowCard = (props) => {
    return (
    <div>
    { props.menus.map(item => (
        <div key={item.id}>
            <Link to={`/flow/${item.id}`}><h2>{item.menuItem}</h2></Link>
            <p>{item.itemContent}</p>
        </div>
    ))}
    </div>
    );
};

export default FlowCard;