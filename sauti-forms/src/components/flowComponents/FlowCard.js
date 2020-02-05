import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getFlows } from '../../actions';

const BorderBox = styled.div`
    border: 1px solid black;
    width: 300px;
    margin: 1%;
    padding: 2%;
` 

const Title = styled.h2`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const FlowCard = (props) => {
    
    useEffect(() => {
        props.getFlows();
    },[props.isUpdating])

    return (
        <div>
        {props.flows.map(item => (
            <BorderBox key={item.id}>
                <Link to={`/flow/${item.id}`} style={{textDecoration: 'none', color: 'black'}}><Title>{item.name}</Title></Link>
                <h3>{item.category}</h3>
            </BorderBox>
        ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating,
        flows: state.flows
    }
}

export default connect(mapStateToProps, { getFlows })(FlowCard);