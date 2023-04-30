import React, { useState } from 'react';
import styled from 'styled-components';
import Block from './Block';
import Loader from './Loader';
import Menu from './Menu';

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
  const [toggleNav, setToggleNav] = useState(false);
  const [percentage, setPercentage] = useState(30);
  const [objFitPercentage, setObjFitPercentage] = useState(0);

  function handleWheel(event) {
    if (isLoading) return;

    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();
    const currentDirection = event.deltaY > 0 ? 'down' : 'up';
    setDirection(currentDirection);

    const nextIndex = currentDirection === 'down' ? activeElement + 1 : activeElement - 1;
    if (nextIndex < 0 || nextIndex >= refs.length) return;

    setIsLoading(true);

    if (currentDirection === 'down') {
      setPercentage((prev) => prev - 20);
      setObjFitPercentage((prev) => prev + 10);
    }

    if (currentDirection === 'up') {
      setPercentage((prev) => prev + 20);
      setObjFitPercentage((prev) => prev - 10);
    }

    isScrollingTimer = setTimeout(() => {
      setActiveElement(nextIndex);
      lenis.scrollTo(refs[nextIndex].ref.current, {
        duration: 1.5,
        onComplete: () => {
          setIsLoading(false);
        },
        lock: true,
      });
    }, 150);
  }

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  console.log(objFitPercentage);
  // 7 секция desktop,web, mobile, about us,portfolio, pricing, contact,
  // menu camilemormal
  return (
    <Wrapper onWheel={handleWheel}>
        {isLoading && <Loader
        direction={direction}
        activeElement={activeElement}/>}
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
        <Menu onClick={handleToggleNav}
        refs={refs}
        activeElement={activeElement}
        toggleNav={toggleNav}
        percentage={percentage}
        objFitPercentage={objFitPercentage}
        setPercentage={setPercentage}/>
    </Wrapper>);
};

export default MainDesktop;
