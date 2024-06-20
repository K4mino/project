import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import SectionTitle from './SectionTitle';

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

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const StyledLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const Intro = () => {
  return (
    <Wrapper>
        <SectionTitle>Hi, my name is Yerzhan</SectionTitle>
        <Description>
           I am web developer with experience in building websites using React, Next, and Vue. I like building apps and solving problems using code.
        </Description>
        <Button>
          <StyledLink href='/resume.pdf' download>My resume</StyledLink>
        </Button>
    </Wrapper>
  )
}

export default Intro