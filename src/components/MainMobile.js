import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MainMobile = ({
  lenis, refs, isScrollingTimer, runLenis, setActiveElement, activeElement, setStartY, startY,
}) => {
  const handleTouchStart = (event) => {
    event.stopPropagation();
    setStartY(event.changedTouches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();

    isScrollingTimer = setTimeout(() => {
      const endY = event.changedTouches[0].clientY;
      const direction = endY < startY ? 'down' : 'up';

      const currentIndex = activeElement;

      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      setActiveElement(nextIndex);
      refs[currentIndex].current.classList.remove('active');
      refs[nextIndex].current.classList.add('active');

      lenis.scrollTo(refs[nextIndex].current, { duration: 0 });
    }, 150);
  };

  return (
        <Wrapper
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={(e) => e.stopPropagation()}>
        {
            refs.map((item, i) => (
                <Block
                title={item.title}
                key={item.id}
                ref={item.ref}
                isActive={i === activeElement}/>
            ))
        }
    </Wrapper>);
};

export default MainMobile;
