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

const SignUp = () => {

    return (
        <StyledDiv>
            <StyledForm>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    placeholder="Enter First Name" 
                    name="first-name" 
                    required
                    />

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter Last Name" 
                    name="last-name" 
                    required
                    />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Enter Email" 
                    name="email" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <input
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Register</button>
                <h4>Already have an account?</h4>
                <Link to='/sign-in'>Sign In</Link>            
            </StyledForm>
        </StyledDiv>
    )
}

export default SignUp;