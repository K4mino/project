import styled from "styled-components";

const Title = styled.h3`
font-size: 24px;
margin: 0;

@media (max-width: 768px) {
  font-size: 18px;
}

@media (max-width: 480px) {
  font-size: 14px;
}
`;

const SkillName = styled.p`
font-size: 14px;
margin: 0;

@media (max-width: 768px) {
  font-size: 12px;
}

@media (max-width: 480px) {
  font-size: 10px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 5px 10px;
  border: 2px solid #1E1E1E;
  color: #fff;
  background-color: #000;

  @media (max-width: 768px) {
    padding: 3px 5px;
  }
`;

const SkillBatch = ({ title, skills, }) => (
    <div style={{ display: 'flex', gap: '5px' ,flexWrap: 'wrap'}}>
      <Title>{title}:</Title>
      {skills.map((skill, index) => (
        <SkillContainer  key={index}>
          <SkillName>{skill}</SkillName>
        </SkillContainer>
      ))}
    </div>
  );

export default SkillBatch