import {useState, useEffect} from "react";
import styled from "styled-components";
import projects from "public/projects.json";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = isMobile ? projects.slice(0, 4) : projects;

  return (
    <Wrapper>
      <SectionTitle>Projects</SectionTitle>
      <Content>
        {displayedProjects.map((project, index) => (
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
