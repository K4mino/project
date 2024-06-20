import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease;
`;

 const Card = styled.div`
  width: 50vw;
  height: 120px;
  text-align: center;
  transition: transform 0.5s ease;
  background-color: #1E1E1E;
  color: #fff;
  border-radius: 10px;
  display: flex;  
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transform-origin: bottom center;

  ${({ $isActive }) => $isActive && 'transform:scale(1.2);'}
  ${({ $isActive }) => $isActive && 'background-color: #fff;color:#000;'}
`; 


const MenuMobile = ({
  refs,
  percentage,
  isOpenNav,
  activeElement,
  onSelect,
  objFitPercentage,
}) => (
  <Wrapper>
    <CardsWrapper $percentage={percentage}>
      {refs.map((item, i) => (
        <Card
          onClick={onSelect}
          key={item.title}
          id={i}
          className={`${isOpenNav ? 'active' : ''}`}
          $isActive={i === activeElement}
        >
          {item.title}
        </Card>
      ))}
    </CardsWrapper>
  </Wrapper>
);

export default MenuMobile;
