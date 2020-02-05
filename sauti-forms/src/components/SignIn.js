import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

//importing form validation components
import FormValidation from './formValidation/FormValidation';
import ValidateAuth from './formValidation/ValidateAuth';

const SignIn = props => {
    const myProps = props;    
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const { handleChange, values, handleSubmit, handleBlur, errors, isSubmitting } = FormValidation(INITIAL_STATE, ValidateAuth, myProps);

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
                        value={ values.username }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.username && <p className="errors-input">{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input className="styled-input"
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        value={ values.password }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.password && <p className="errors-input">{errors.password}</p>}

                    <button disabled={isSubmitting} type="submit">Login</button>
                    <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>       
                                
                </form>
            </div>
        </>
    )
}

export default SignIn;