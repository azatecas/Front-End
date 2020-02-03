import React from 'react';
import { Link } from "react-router-dom";

const SignIn = () => {

    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Enter Username" 
                    name="username" 
                    required
                    />

                <label htmlFor="password">Password:</label>
                <input
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    />

                <button type="submit">Login</button>
                
                    <Link to='./sign-up'>Sign Up</Link>           
            </form>
        </div>
    )
}

export default SignIn;