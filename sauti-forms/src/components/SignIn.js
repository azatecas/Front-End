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
    width: 98%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 0px 5px;

    &:focus {
        outline: none;
    }
` //end of StyledInput

const SignIn = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const user = {
        username: username,
        password: password
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.user.id);
            props.history.push("/dashboard");
      }); 
    } //end of handleSubmit function

    const handleUserChange = e => {
        setUsername(e.target.value)
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
                        value={ username }
                        required
                        onChange={ handleUserChange }
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

                    <button type="submit">Login</button>
                    <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>       
                                
                </StyledForm>
            </StyledDiv>
        </>
    )
}

export default SignIn;