import React from 'react';

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
            </form>
        </div>
    )
}

export default SignIn;