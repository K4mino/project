import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GenericLoader from "./GenericLoader";
import Block from "./Block";
import Loader from "./Loader";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

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
  setStartY,
  startY,
  isLoadingGeneric,
  setIsLoadingGeneric,
}) => {
  const [direction, setDirection] = useState("down");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const handleTouchStart = (event) => {
    event.stopPropagation();
    setStartY(event.changedTouches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    if (isLoading && isOpenNav) return;

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
    window.scrollTo(0, 0);
    setActiveElement(0);
  }, []);

  return (
    <Wrapper
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {isLoadingGeneric && <GenericLoader />}
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
      <BurgerMenu onClick={() => setIsOpenNav(!isOpenNav)}>
        <Bar />
        <Bar />
        <Bar />
      </BurgerMenu>
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
