import React from 'react';

const FlowPage = props => {
    return(
        <div style={{border: '1px solid black', width: '300px', margin: '2%', padding: '1%'}}>
            <p>{props.page.name}</p>
            <p>{props.page.content}</p>
        </div>
    )
}

export default FlowPage;