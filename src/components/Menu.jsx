import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  overflow: hidden;


  &.active {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    inset:0;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 10px;
  z-index: 999;
  cursor: pointer;
  transition: width .3s ease;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.active {
    position: absolute;

    left: -14% !important;
    top: 50% !important;
    transform: translate(0%, -50%); 
    transform-origin: bottom right;
  }
`;

const Bar = styled.div`
  height: 90px;
  transition: width 0.3s linear;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 10px;
  height: 40px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  
  ${({ $isActive }) => ($isActive ? 'width: 170px;' : 'width: 80px;')}
  ${({ $isActive }) => ($isActive
    ? 'filter:;'
    : 'filter: invert(15%) sepia(99%) saturate(0%) hue-rotate(210deg) brightness(104%) contrast(97%);')}

  &.image.active {
    height: 56vmin;
    transition: width 0.3s linear;
    ${({ $isActive }) => ($isActive ? 'width: 45vmin;' : 'width: 35vmin;')}
  }
  object-fit: cover;
  object-position: 100% center;
`;
// width
const Menu = ({
  activeElement, refs, isOpenNav, onClick, percentage, objFitPercentage, onSelect,
}) => {
  const container = useRef(null);

  useEffect(() => {
    const track = container.current;
    const images = track.getElementsByClassName('image');

    for (const image of images) {
      image.animate({
        objectPosition: `${50 + objFitPercentage}% center`,
      }, { duration: 1200, fill: 'forwards' });
    }
  }, [objFitPercentage]);

  return (
  <Wrapper ref={container} className={isOpenNav ? 'active' : ''} >
    <ProgressBar onClick={onClick} className={isOpenNav ? 'active' : ''} $percentage={percentage}>
      {refs.map((_, i) => (
        <Bar
          id={i}
          onClick={onSelect}
          src={_.src}
          $percentage={percentage}
          className={`image ${isOpenNav ? 'active' : ''}`}
          key={_.title}
          $isActive={i === activeElement}
          $objFitPercentage={objFitPercentage}
        >
          <span>{_.title}</span>
        </Bar>
      ))}
    </ProgressBar>
  </Wrapper>
  );
};

export default Menu;
