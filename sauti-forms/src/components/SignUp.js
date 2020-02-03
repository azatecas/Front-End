import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    text-align: center;
    width: 30%;
    height: 50vh;
    min-width: 450px;
    border: 1px solid black;
    padding: 10px;
`
 //end of StyledForm component

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;

` 
//end of StyledDiv component

const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid red;
    border-radius: 10px;
`

const SignUp = () => {

    const handleSubmit = e => {
        e.preventDefault(); 
      }

    return (
        <StyledDiv>
            <StyledForm onSubmit={ handleSubmit }>
                <label htmlFor="first-name">First Name:</label>
                <StyledInput
                    type="text"
                    placeholder="Enter First Name" 
                    name="first-name" 
                    required
                    />

                <label htmlFor="last-name">Last Name:</label>
                <StyledInput
                    type="text"
                    placeholder="Enter Last Name" 
                    name="last-name" 
                    required
                    />

                <label htmlFor="email">Email:</label>
                <StyledInput
                    type="email"
                    placeholder="Enter Email" 
                    name="email" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <StyledInput
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Register</button>
                <p>Already have an account? <Link to='/sign-in'>Sign In</Link> </p>
                            
            </StyledForm>
        </StyledDiv>
    )
}

export default SignUp;