import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
    width: 230px;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 360px;
`;

const Description = styled.p`
    font-size: 14px;
    margin: 0 auto;
    width: 90%;
`;

const Title = styled.h2`
    font-size: 18px;
    width: 100%;
    text-align: center;
`

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 9px 9px 0px 0px;
    object-fit: contain;
`

const Link = styled.a`
    display: block;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid #1E1E1E;
    color: #000;
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 auto 10px;
    font-size: 14px;

    &:hover {
        background-color: #1E1E1E;
        color: #fff;
    }
`

const ProjectCard = ({img, text,title,stack,link}) => {
  return (
    <Wrapper>
        <StyledImage src={img} alt="project" />
        <Title>{title}</Title>
        <Description>{text}</Description>
        <Description><b>Stack:</b>{stack.map((stack, index) => <span key={index}>{stack}, </span>)}</Description>
        <Link target="_blank" href={link}>See more</Link>
    </Wrapper>
  )
}

export default ProjectCard