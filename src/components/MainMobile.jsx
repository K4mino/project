import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GenericLoader from "./GenericLoader";
import Block from "./Block";
import Loader from "./Loader";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import MobileScrollindicator from "./MobileScrollindicator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
`;

const Bar = styled.div`
  width: 34px;
  height: 4px;
  background-color: #fff;

  &:last-child {
    width: 24px;
  }
`;

const MainMobile = ({
  lenis,
  refs,
  isScrollingTimer,
  runLenis,
  setActiveElement,
  activeElement,
  isLoadingGeneric,
  setIsLoadingGeneric,
}) => {
  const [direction, setDirection] = useState("down");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [startY, setStartY] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const MOVE_THRESHOLD = 40;
  const handleTouchStart = (event) => {
    event.stopPropagation();
    setStartY(event.changedTouches[0].clientY);
  };

  const handleTouchMove = (event) => {
    event.stopPropagation();
    const currentY = event.touches[0].clientY;
  };
  

  const handleTouchEnd = (event) => {
    console.log(event.changedTouches[0].clientY, startY,direction);
    if(Math.abs(event.changedTouches[0].clientY - startY) < MOVE_THRESHOLD)return
    if (isLoading || isScrolling) return;
    if (isScrollingTimer !== null) clearTimeout(isScrollingTimer);

    event.stopPropagation();
    runLenis();
    const endY = event.changedTouches[0].clientY;
    const currentDirection = endY < startY ? "down" : "up";
    setDirection(currentDirection);

    const nextIndex =
      currentDirection === "down" ? activeElement + 1 : activeElement - 1;
    if (nextIndex < 0 || nextIndex >= refs.length) return;

    setIsLoading(true);
    setIsScrolling(true);
    isScrollingTimer = setTimeout(() => {
      setActiveElement(nextIndex);
      lenis.scrollTo(refs[nextIndex].ref.current, {
        duration: 1,
        onComplete: () => {
          setIsLoading(false);
          setIsScrolling(false); 
        },
        lock: true,
      });
    }, 150);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    if (!isOpenNav) return;

    setIsOpenNav(false);
    runLenis();
    const targetIndex = +e.target.attributes.id?.value;
    //setIsLoadingGeneric(true);
    setActiveElement(targetIndex);
    lenis.scrollTo(refs[targetIndex].ref.current, {
      duration: 1,
      lock: true,
      onComplete: () => {
        setIsLoadingGeneric(false);
      },
    });
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, isMoving, isLoading, isScrolling, activeElement]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveElement(0);
  }, []);

  return (
    <Wrapper
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <MobileScrollindicator/>
      {isLoading && (
        <Loader direction={direction} activeElement={activeElement} />
      )}
      {/* {isOpenNav && (
        <MenuMobile
          refs={refs}
          isOpenNav={isOpenNav}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
          onSelect={handleSelect}
        />
      )} */}
{/*       <BurgerMenu onClick={() => setIsOpenNav(!isOpenNav)}>
        <Bar />
        <Bar />
        <Bar />
      </BurgerMenu> */}
      {refs.map((item, i) => (
        <Block
          isActive={i === activeElement}
          img={item.src}
          direction={direction}
          title={item.title}
          key={item.id}
          ref={item.ref}
        >
          {item.block}
        </Block>
      ))}
    </Wrapper>
  );
};

export default MainMobile;
