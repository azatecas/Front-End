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
//end of StyledDiv

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    text-align: center;
    width: 30%;
    height: 25vh;
    min-width: 450px;
    border: 1px solid black;
    padding: 10px;

`
//end of StyledForm

const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid red;
    border-radius: 10px;
`



const SignIn = () => {

    const handleSubmit = e => {
        e.preventDefault(); 
      }

    return (
        <StyledDiv onSubmit={ handleSubmit } >
            <StyledForm>
                <label htmlFor="username">Username:</label>
                <StyledInput
                    type="text"
                    placeholder="Enter Username" 
                    name="username" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <StyledInput
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Login</button>
                <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>
                
                             
            </StyledForm>
        </StyledDiv>
    )
}

export default SignIn;