import React, { useState } from 'react';
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); 
      } //end of handleSubmit function

      const handleNameChange = e => {
        setFirstName({
        [e.target.id] : e.target.value
    })
    } //end of handlePwdChange function

    const handleLastNameChange = e => {
        setLastName({
        [e.target.id] : e.target.value
    })
    } //end of handlePwdChange function

    const handleEmailChange = e => {
        setEmail({
        [e.target.id] : e.target.value
    })
    } //end of HandleEmailChange function

    const handlePwdChange = e => {
        setPassword({
        [e.target.id] : e.target.value
    })
    } //end of handlePwdChange function
    
    return (
        <StyledDiv>
            <StyledForm onSubmit={ handleSubmit }>
                <label htmlFor="first-name">First Name:</label>
                <StyledInput
                    type="text"
                    placeholder="Enter First Name" 
                    name="first-name" 
                    required
                    onChange={ handleNameChange }
                    />

                <label htmlFor="last-name">Last Name:</label>
                <StyledInput
                    type="text"
                    placeholder="Enter Last Name" 
                    name="last-name" 
                    required
                    onChange={ handleLastNameChange }
                    />

                <label htmlFor="email">Email:</label>
                <StyledInput
                    type="email"
                    placeholder="Enter Email" 
                    name="email" 
                    required
                    onChange={ handleEmailChange }
                    />

                <label htmlFor="password">Password:</label>
                <StyledInput
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    onChange={ handlePwdChange }
                    />

                <button type="submit">Register</button>
                <p>Already have an account? <Link to='/sign-in'>Sign In</Link> </p>
                            
            </StyledForm>
        </StyledDiv>
    )
}

export default SignUp;