import React, { useState } from 'react';
import styled from 'styled-components';
import Block from './Block';
import Loader from './Loader';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MainMobile = ({
  lenis, refs, isScrollingTimer, runLenis, setActiveElement, activeElement, setStartY, startY,
}) => {
  const [direction, setDirection] = useState('down');
  const [isLoading, setIsLoading] = useState(false);
  const handleTouchStart = (event) => {
    event.stopPropagation();
    setStartY(event.changedTouches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    if (isLoading) return;

    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();

    isScrollingTimer = setTimeout(() => {
      const endY = event.changedTouches[0].clientY;
      const currentDirection = endY < startY ? 'down' : 'up';
      setDirection(currentDirection);

      const nextIndex = currentDirection === 'down' ? activeElement + 1 : activeElement - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      setActiveElement(nextIndex);

      lenis.scrollTo(refs[nextIndex].ref.current, {
        duration: 1.5,
        onComplete: () => {
          setIsLoading(false);
        },
        lock: true,
      });
    }, 150);
  };

  return (
      <Wrapper
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={(e) => e.stopPropagation()}>
        {isLoading && <Loader
        direction={direction}
        activeElement={activeElement}
        isFirst={activeElement === 0}/>}
        {
            refs.map((item, i) => (
                <Block
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                isFirst={activeElement === 0}
                img={item.src}
                direction={direction}
                title={item.title}
                key={item.id}
                ref={item.ref}
                isActive={i === activeElement}/>
            ))
        }
    </Wrapper>);
};

export default MainMobile;
