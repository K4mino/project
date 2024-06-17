import React from "react";
import styled from "styled-components";
import skills from 'public/skills.json';
import SkillBatch from "./Skillbatch";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 40px;
  margin: 0;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-grow: 1;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const Period = styled.p`
  font-size: 22px;
  margin: 0;
  color: #777;
`;

const Place = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
`

const About = () => {
  return (
    <Wrapper>
      <h2>About me</h2>
      <Content>
        <Block >
          <Title>Work experience</Title>
          <Block>
            <Subtitle>Backend Developer</Subtitle>
            <Place>Freedom finance life</Place>
            <Period>Aug 2023 - Present</Period>
          </Block>
          <Block>
            <Subtitle>AWS Intern</Subtitle>
            <Place>Edetek</Place>
            <Period>Aug 2022 - Nov 2022</Period>
          </Block>
        </Block>
        <Block >
          <Title>Education</Title>
          <Block>
            <Subtitle>Master's degree | Software Engineering</Subtitle>
            <Place>KBTU</Place>
            <Period>Sep 2023 - Jun 2025</Period>
          </Block>
          <Block>
            <Subtitle>Bachelor's degree | Information Systems</Subtitle>
            <Place>IITU</Place>
            <Period>Sep 2019 - Jun 2023</Period>
          </Block>
        </Block>
        <Block >
          <Title>Skills</Title>
          <SkillBatch title={"Frontend"} skills={skills["Frontend"]}/>
          <SkillBatch title={"Backend"} skills={skills["Backend"]}/>
          <SkillBatch title={"Tools"} skills={skills["Tools"]}/>
        </Block>
      </Content>
    </Wrapper>
  );
};

export default About;
