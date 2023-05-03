import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  z-index: 999;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.5s ease;
  ${({ $percentage }) => $percentage && `top:${$percentage}%;`}
`;

const Card = styled.img`
  width: 50vw;
  height: 120px;
  object-fit: cover;
  object-position: 50% center;
  transition: transform 0.5s ease;

  ${({ $isActive }) => $isActive && 'transform:scale(1.5);'}
  ${({ $isActive }) => ($isActive
    ? 'filter:;'
    : 'filter: invert(15%) sepia(99%) saturate(0%) hue-rotate(210deg) brightness(104%) contrast(97%);')}
`;

const MenuMobile = ({
  refs,
  percentage,
  isOpenNav,
  activeElement,
  objFitPercentage,
}) => (
  <Wrapper>
    <CardsWrapper $percentage={percentage}>
      {refs.map((item, i) => (
        <Card
          key={item.title}
          id={i}
          src={item.src}
          className={`image ${isOpenNav ? 'active' : ''}`}
          $isActive={i === activeElement}
          $objFitPercentage={objFitPercentage}
        />
      ))}
    </CardsWrapper>
  </Wrapper>
);

export default MenuMobile;
