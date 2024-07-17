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
    width: 85%;
    margin: 0 auto;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        width: 90%;
        text-align: left;
    }
`;

const StyledLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const Intro = () => {
  return (
    <Wrapper>
        <SectionTitle>Hi, my name is Yerzhan. I am software developer</SectionTitle>
        <Description>
           My main stack include languages like JavaScript, TypeScript and also i have  experience in building websites using React, Next, and Vue. 
           Looking forward to contributing to impactful web development projects and growing within a forward-thinking team.
        </Description>
        <Button>
          <StyledLink href='/resume.pdf' download>My resume</StyledLink>
        </Button>
    </Wrapper>
  )
}

export default Intro