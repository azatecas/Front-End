import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BorderBox = styled.div`
    border: 1px solid black;
    width: 300px;
    margin: 1%;
    padding: 2%;
`

const FlowCard = (props) => {
    return (
    <div>
    {props.flows.map(item => (
        <BorderBox key={item.id}>
            <Link to={`/flow/${item.id}`}><h2>{item.name}</h2></Link>
            <p>{item.category}</p>
        </BorderBox>
    ))}
    </div>
    );
};

export default FlowCard;