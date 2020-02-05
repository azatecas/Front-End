import React from 'react';
import { connect } from 'react-redux';

const CardInfo = props => {
    console.log(props)
    return(
        <>
            <h1>Name: {props.flow.name}</h1>
            <h3>Category: {props.flow.category}</h3>
        </>
    )
}

const mapStateToProps = state => {
    return {
        flow: state.flow
    }
}

export default connect(mapStateToProps, {})(CardInfo);