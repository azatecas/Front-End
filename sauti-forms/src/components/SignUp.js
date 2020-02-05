import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../axiosAuth";
import "../App.css";
import styled from 'styled-components';

const Button = styled.button`
    margin-top: 2%;
    border: 2px solid black;
    padding: 2%;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`

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
        .then(() => {
            props.history.push("/sign-in");
        })
        .catch(err => {
            console.log(err);
        })
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
            <div className="styled-div">
                <form className="styled-form" onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <input className="styled-input"
                        type="text"
                        placeholder="Enter Username" 
                        name="username" 
                        value={ userName }
                        required
                        onChange={ handleNameChange }
                        />

                    <label htmlFor="email">Email:</label>
                    <input className="styled-input"
                        type="email"
                        placeholder="Enter Email" 
                        name="email"
                        value={ email } 
                        required
                        onChange={ handleEmailChange }
                        />

                    <label htmlFor="password">Password:</label>
                    <input className="styled-input"
                        type="password" 
                        placeholder="Enter Password" 
                        name="password" 
                        value={ password }
                        required
                        onChange={ handlePwdChange }
                        />

                    <Button type="submit">Register</Button>
                    <p>Already have an account? <Link to='/sign-in'>Sign In</Link> </p>
                                
                </form>
            </div>
        </>
    )
}

export default SignUp;