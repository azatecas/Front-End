import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { axiosWithAuth } from "../axiosAuth";
import "../App.css";

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
            <div className="styled-div">
                <form className="styled-form" onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <input className="styled-input"
                        type="text"
                        placeholder="Enter Username"
                        name="username" 
                        value={ username }
                        required
                        onChange={ handleUserChange }
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

                    <button type="submit">Login</button>
                    <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>       
                                
                </form>
            </div>
        </>
    )
}

export default SignIn;