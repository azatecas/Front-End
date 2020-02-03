import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <div>
            <form>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    placeholder="Enter First Name" 
                    name="first-name" 
                    required
                    />

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter Last Name" 
                    name="last-name" 
                    required
                    />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Enter Email" 
                    name="email" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <input
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Register</button>
                <h4>Already have an account?</h4>
                <Link to='/sign-in'>Sign In</Link>            
            </form>
        </div>
    )
}

export default SignUp;