import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
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
  transition: all .5s ease;

  &.active {
    position: absolute;

    left:${({ $percentage }) => `${$percentage}%;`}
    top: 50% !important;
    transform: translate(0%, -50%); 
    transform-origin: bottom right;
  }
`;

const Bar = styled.img`
  height: 90px;

  ${({ $isActive }) => ($isActive && 'transition: width 0.5s linear;')}
  ${({ $isActive }) => ($isActive ? 'width: 170px;' : 'width: 70px;')}
  ${({ $isActive }) => ($isActive
    ? 'filter:;'
    : 'filter: invert(15%) sepia(99%) saturate(0%) hue-rotate(210deg) brightness(104%) contrast(97%);')}

  &.image.active {
    height: 56vmin;
    transition: width 0.5s linear;
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
    // eslint-disable-next-line no-restricted-syntax
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
        />
      ))}
    </ProgressBar>
  </Wrapper>
  );
};

export default Menu;
