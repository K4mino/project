import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 230px;
  margin: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 1680px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 90%;
    justify-content: center;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  

  @media (max-width: 768px) {
    width:50%;
  }
`;

const CardContent = styled.div`
  padding: 0px 10px  5px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-weight: bold;
  max-width: 100%;
  word-wrap: break-word; 
  overflow-wrap: break-word; 
  color: #000;
`;

const CardLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ img, title, text, link,stack }) => (
  <Card>
    <CardImage src={img} alt="Project Image" />
    <CardContent>
      <CardTitle>{'<' + title + '/>'}</CardTitle>
      {/* <CardDescription>{text}</CardDescription> */}
      <CardDescription>Stack:{stack + ' '}</CardDescription>
      <CardLink href={link}>Learn More</CardLink>
    </CardContent>
  </Card>
);

export default ProjectCard;
