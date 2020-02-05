import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { axiosWithAuth } from "../axiosAuth";
import "../App.css";

//importing form validation component
import FormValidation from './formValidation/FormValidation';
//sign in form validation
import ValidateAuth from './formValidation/ValidateAuth';



const SignIn = props => {


    const myProps = props;
    
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const { handleChange, values, handleSubmit, handleBlur, errors, isSubmitting } = FormValidation(INITIAL_STATE, ValidateAuth, myProps);

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post("/api/auth/login", values)
    //     .then(res => {
    //         localStorage.setItem("token", res.data.token);
    //         localStorage.setItem("id", res.data.user.id);
    //         props.history.push("/dashboard");
    //   }); 
    // } //end of handleSubmit function

    // const handleUserChange = e => {
    //     setUsername(e.target.value)
    // } //end of HandleEmailChange function

    // const handlePwdChange = e => {
    //     setPassword(e.target.value)
    // } //end of handlePwdChange function

    return (
        <>
            <h1>Sauti Studio</h1>
            <div className="styled-div">
                <form className="styled-form" onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <input className={errors.username && 'error-input'}
                        type="text"
                        placeholder="Enter Username"
                        name="username" 
                        value={ values.username }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.username && <p className="errors-input">{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input className={errors.password && 'error-input styled-input'}
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        value={ values.password }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.password && <p className="errors-input">{errors.password}</p>}

                    <button type="submit">Login</button>
                    <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>       
                                
                </form>
            </div>
        </>
    )
}

export default SignIn;