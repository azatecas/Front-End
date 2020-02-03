import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    width: 30%;
    height: 45vh;
    min-width: 450px;
    border: 1px solid black;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;

`

const SignIn = () => {

    return (
        <StyledDiv>
            <StyledForm>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Enter Username" 
                    name="username" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <input
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Login</button>
                <h4>Or make an account here:</h4>
                
                    <Link to='./sign-up'>Sign Up</Link>           
            </StyledForm>
        </StyledDiv>
    )
}

export default SignIn;