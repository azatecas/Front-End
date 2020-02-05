import React from 'react';

const CardInfo = props => {
    return(
        <>
            <h1>Name: {props.name}</h1>
            <h3>Category: {props.category}</h3>
        </>
    )
}

export default CardInfo;