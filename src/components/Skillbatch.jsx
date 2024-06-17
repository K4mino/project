import styled from "styled-components";

const Title = styled.h3`
font-size: 24px;
margin: 0;
`;

const SkillName = styled.p`
font-size: 14px;
margin: 0;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 5px 10px;
  border: 2px solid #1E1E1E;
  color: #fff;
  background-color: #000;
  flex-wrap: wrap;
`;

const SkillBatch = ({ title, skills, }) => (
    <div style={{ display: 'flex', gap: '5px' }}>
      <Title>{title}:</Title>
      {skills.map((skill, index) => (
        <SkillContainer  key={index}>
          <SkillName>{skill}</SkillName>
        </SkillContainer>
      ))}
    </div>
  );

export default SkillBatch