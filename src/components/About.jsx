import React from "react";
import styled from "styled-components";
import skills from "public/skills.json";
import SkillBatch from "./Skillbatch";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin: 0;
  text-decoration: underline;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-grow: 1;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    gap: 5px;
    height: 100%;
  }
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Period = styled.p`
  font-size: 22px;
  margin: 0;
  color: #777;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Place = styled.p`
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
}

@media (max-width: 480px) {
    font-size: 14px;
}
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
}
`;

const About = () => {
  return (
    <Wrapper>
      <SectionTitle>About me</SectionTitle>
      <Content>
        <Block>
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
        <Block>
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
        <Block>
          <Title>Skills</Title>
          <SkillBatch title={'Frontend'} skills={skills['Frontend']} />
          <SkillBatch title={'Backend'} skills={skills['Backend']} />
          <SkillBatch title={'Tools'} skills={skills['Tools']} />
        </Block>
      </Content>
    </Wrapper>
  );
};

export default About;
