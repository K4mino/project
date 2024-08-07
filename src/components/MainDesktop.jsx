import React, { useState } from 'react';
import styled from 'styled-components';
import Block from './Block';
import GenericLoader from './GenericLoader';
import Loader from './Loader';
import Menu from './Menu';
import Scrollindicator from './Scrollindicator';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

const MainDesktop = ({
  lenis, refs, isScrollingTimer, runLenis, setActiveElement, activeElement, isLoadingGeneric,
  setIsLoadingGeneric,
}) => {
  const [direction, setDirection] = useState('down');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [percentage, setPercentage] = useState(-15);
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
      setPercentage((prev) => prev - 15);
      setObjFitPercentage((prev) => prev + 5);
    }

    if (currentDirection === 'up') {
      setPercentage((prev) => prev + 15);
      setObjFitPercentage((prev) => prev - 5);
    }

    isScrollingTimer = setTimeout(() => {
      setActiveElement(nextIndex);
      lenis.scrollTo(refs[nextIndex].ref.current, {
        duration: 1,
        onComplete: () => {
          setIsLoading(false);
        },
        lock: true,
      });
    }, 150);
  }

  const handleToggleNav = () => {
    if (isLoading) return;
    setIsOpenNav(!isOpenNav);
  };

  const handleSelect = (e) => {
    if (!isOpenNav) return;

    setIsOpenNav(false);
    runLenis();
    const targetIndex = +e.target.attributes.id?.value;
    //setIsLoadingGeneric(true);
    setActiveElement(targetIndex);
    /* setPercentage((prev) => {
      if (targetIndex > activeElement) {
        return prev - 15;
      }
      if (targetIndex < activeElement) {
        return prev + 1;
      }
      return prev;
    }); */
    lenis.scrollTo(refs[targetIndex].ref.current, {
      duration: 1,
      lock: true,
      onComplete: () => {
        setIsLoadingGeneric(false);
      },
    });
  };

  return (
    <Wrapper onWheel={handleWheel}>
        <Scrollindicator/>
        {isLoading && <Loader
        direction={direction}
        activeElement={activeElement}/>}
        {
            refs.map((item, i) => (
                <Block
                img={item.src}
                direction={direction}
                title={item.title}
                key={item.id}
                ref={item.ref}
                isActive={i === activeElement}>
                    {item?.block}
                </Block>
            ))
        }
        <Menu onClick={handleToggleNav}
        refs={refs}
        onSelect={handleSelect}
        activeElement={activeElement}
        isOpenNav={isOpenNav}
        percentage={percentage}
        objFitPercentage={objFitPercentage}
        setPercentage={setPercentage}/>
    </Wrapper>);
};

export default MainDesktop;
