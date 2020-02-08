import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components';
import NavBar from './flowComponents/NavBar';

//importing form validation components
import SignUpValidation from './formValidation/SignUpValidation';
import SignUpAuth from './formValidation/SignUpAuth';

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

const SignUp = props => {
    const myProps = props;
    const INITIAL_STATE = {
        username: "",
        email: "",
        password: ""
    }
    
    const { handleSubmit, handleChange, handleBlur, isSubmitting, errors, user } = SignUpValidation(INITIAL_STATE, SignUpAuth, myProps);

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

                    <label htmlFor="email">Email:</label>
                    <input className="styled-input"
                        type="email"
                        placeholder="Enter Email" 
                        name="email"
                        value={ user.email } 
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                         />
                        {errors.email && <p className="error-input">{errors.email}</p>}

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
                        <Button disable={isSubmitting} type="submit">Register</Button>
                    </div>

                    <div className='bottom-form'>
                        <p>Already have an account? <Link to='/sign-in'>Sign In</Link> </p>         
                        <a href="https://fervent-bassi-308b70.netlify.com/">Return to Marketing Page</a>
                    </div>                    
                    
                                          
                </form>
            </div>
        </>
    )
}

export default SignUp;