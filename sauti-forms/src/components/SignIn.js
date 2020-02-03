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
    border: 1px solid gray;
    border-radius: 10px;
`

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); 
      } //end of handleSubmit function

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
        <StyledDiv onSubmit={ handleSubmit } >
            <StyledForm>
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

                <button type="submit">Login</button>
                <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link>  </p>       
                             
            </StyledForm>
        </StyledDiv>
    )
}

export default SignIn;