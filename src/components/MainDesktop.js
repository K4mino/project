import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Block from './Block';
import Loader from './Loader';

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
  const container = useRef(null);

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
      setIsLoading(true);
      lenis.scrollTo(refs[nextIndex].ref.current, {
        duration: 1.5,
        onComplete: () => {
          setIsLoading(false);
        },
        lock: true,
      });
    }, 150);
  }
  console.log();
  return (
    <Wrapper ref={container} onWheel={handleWheel}>
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

export default MainDesktop;
