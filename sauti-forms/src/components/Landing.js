import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`

const CustomLink = styled.button`
  display: flex;
  justify-content: space-between;
  margin: 4%;
`

const Home = () => {
    return(
        <div>
            <FlexBox>
            <CustomLink><Link to='/sign-in'>Sign In</Link></CustomLink>
            <p>Or</p>
            <CustomLink><Link to='/sign-up'>Sign Up</Link></CustomLink>
        </FlexBox>
        </div>
    )
}

export default Home;