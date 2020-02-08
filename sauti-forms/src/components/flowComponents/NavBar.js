import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 10vh;
    ${'' /* border: 1px solid green; */}
    background-color: rgb(121, 1, 1);
    top: 0px;
    padding:0px;
    margin:0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 28px;

`

const NavBar = (props) => {
    return (
        <Nav>
            {/* <div>
                <div>Back to Page</div>                
            </div> */}
            <div>
                <h1>Sauti Studio</h1>
            </div>                      
        </Nav>
    )

}

export default NavBar;