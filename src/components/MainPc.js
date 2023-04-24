import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MainPc = ({
  lenis, refs, isScrollingTimer, runLenis, setActiveElement, activeElement,
}) => {
  function handleWheel(event) {
    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();

    isScrollingTimer = setTimeout(() => {
      const direction = event.deltaY > 0 ? 'down' : 'up';
      const currentIndex = activeElement;

      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= refs.length) return;

      setActiveElement(nextIndex);
      refs[currentIndex].current?.classList.remove('active');
      refs[nextIndex].current?.classList.add('active');

      lenis.scrollTo(refs[nextIndex].current, { duration: 0.15 });
    }, 150);
  }

  return (
    <Wrapper onWheel={handleWheel}>
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

export default MainPc;
