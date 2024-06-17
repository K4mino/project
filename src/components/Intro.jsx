import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    text-align: center;
    width: 70%;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 50px;
    margin: 0;
    font-weight: 800;
`;

const StyledLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const Intro = () => {
  return (
    <Wrapper>
        <Title>Hi, my name is Yerzhan</Title>
        <Description>
           I am web developer with experience in building websites using React, Next, and Vue. I like building apps and solving problems using code.
        </Description>
        <Button >
          <StyledLink href='/resume.pdf' download>My resume</StyledLink>
        </Button>
    </Wrapper>
  )
}

export default Intro