import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Block from './Block';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MainDesktop = ({
  lenis, refs, isScrollingTimer, runLenis, setActiveElement, activeElement,
}) => {
  const [direction, setDirection] = useState('down');
  const [isLoading, setIsLoading] = useState(false);
  function handleWheel(event) {
    if (isLoading) return;

    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();

    isScrollingTimer = setTimeout(() => {
      const currentDirection = event.deltaY > 0 ? 'down' : 'up';
      setDirection(currentDirection);

      const nextIndex = currentDirection === 'down' ? activeElement + 1 : activeElement - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      setActiveElement(nextIndex);

      lenis.scrollTo(refs[nextIndex].ref.current, { duration: 0.15 });
    }, 150);
  }

  useEffect(() => {
    if (isLoading) {
      document.removeEventListener('wheel', handleWheel);
    }
    document.addEventListener('wheel', handleWheel);
  }, [isLoading]);

  return (
    <Wrapper onWheel={handleWheel}>
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

export default MainDesktop;
