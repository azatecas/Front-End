import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { axiosWithAuth } from "../axiosAuth";

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

    &:focus {
        outline: none;
    }
` //end of StyledInput

const SignUp = props => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = {
        username: userName,
        email: email,
        password: password
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/auth/register", user)
        .then(res => {
            props.history.push("/");
      }); 
    } //end of handleSubmit function

      const handleNameChange = e => {
        setUserName(e.target.value)
    } //end of handlePwdChange function

    const handleEmailChange = e => {
        setEmail(e.target.value)
    } //end of HandleEmailChange function

    const handlePwdChange = e => {
        setPassword(e.target.value)
    } //end of handlePwdChange function
    
    return (
        <>
            <h1>Sauti Studio</h1>
            <StyledDiv>
                <StyledForm onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <StyledInput
                        type="text"
                        placeholder="Enter Username" 
                        name="username" 
                        value={ userName }
                        required
                        onChange={ handleNameChange }
                        />

                    <label htmlFor="email">Email:</label>
                    <StyledInput
                        type="email"
                        placeholder="Enter Email" 
                        name="email"
                        value={ email } 
                        required
                        onChange={ handleEmailChange }
                        />

                    <label htmlFor="password">Password:</label>
                    <StyledInput
                        type="password" 
                        placeholder="Enter Password" 
                        name="password" 
                        value={ password }
                        required
                        onChange={ handlePwdChange }
                        />

                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to='/sign-in'>Sign In</Link> </p>
                                
                </StyledForm>
            </StyledDiv>
        </>
    )
}

export default SignUp;