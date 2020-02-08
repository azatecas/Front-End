import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components';
import NavBar from './flowComponents/NavBar';
//importing form validation components
import FormValidation from './formValidation/FormValidation';
import ValidateAuth from './formValidation/ValidateAuth';

const Button = styled.button`
    border: 1px solid #1B73C1;
    font-size: 24px;
    padding: 2%;
    background-color: #1B73C1;
    color: white;
    width: 50%;
    height: 50px;
    border-radius: 10px;
    &:hover {
        background-color: #0C5698 ;
    }
    @media (max-width: 500px) {
    width: 100%;
  }
` //end of Button 
const SignIn = props => {
    const myProps = props;    
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const { handleChange, user, handleSubmit, handleBlur, errors, isSubmitting } = FormValidation(INITIAL_STATE, ValidateAuth, myProps);

    return (
        <>
            
            <NavBar />
            <div className="styled-div">
                <form className="styled-form" onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <input className="styled-input"
                        type="text"
                        placeholder="Enter Username"
                        name="username" 
                        value={ user.username }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.username && <p className="error-input">{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input className="styled-input"
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        value={ user.password }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.password && <p className="error-input">{errors.password}</p>}
                    <div className="button-container">
                        <Button disabled={isSubmitting} type="submit">Login</Button>
                    </div>
                    <div className='bottom-form'>
                        <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link></p>
                        <a href="https://fervent-bassi-308b70.netlify.com/">Return to Marketing Page</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;