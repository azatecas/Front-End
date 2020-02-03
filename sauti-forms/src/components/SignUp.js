import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;

` 
//end of StyledDiv component

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
    padding: 5px;
`
 //end of StyledForm component



const StyledInput = styled.input`
    width: 98%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
    padding-left: 5px;
    
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