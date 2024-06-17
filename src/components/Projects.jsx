import React from "react";
import styled from "styled-components";
import projects from "public/projects.json";
import ProjectCard from "./ProjectCard";

const Wrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Projects = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>
      <Content>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.image}
            title={project.title}
            text={project.description}
            stack={project.stack}
            link={project.url}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default Projects;
