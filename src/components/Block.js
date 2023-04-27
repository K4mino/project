import React, { useEffect } from 'react';
import styled from 'styled-components';

import LoaderUp from './LoaderUp';
import LoaderDown from './LoaderDown';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    transition: opacity 3s linear;
    opacity: 0;
    position:relative;
    z-index:1;
    background-size:cover;

    background-image: ${({ $background }) => ($background ? `url(${$background})` : 'none')};
    background-repeat: no-repeat;

    &.active {
        opacity:1;
    }
    &.active h1{
      color:#fff;
      background-color:#333;
      opacity:0;
      transform: translateX(-150%);
      animation-name: slideLeft;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-delay:1s;
    }

    @keyframes slideLeft {
      0% {
        transform: translateX(-150%);
        opacity:0;
      }
      100% {
        opacity:1;
        transform: translateX(0%); 
    }
`;

const Block = React.forwardRef(({
  title, isActive, img, direction, isFirst, isLoading, setIsLoading,
}, ref) => {
  // isFirst
  useEffect(() => {
    const showLoader = !(isFirst && direction === 'down');

    if (isActive && showLoader) {
      setIsLoading(true);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);
  // скролл при загрузке
  return (
    <>
    {isLoading
    && <>
      {
        direction === 'up' ? <LoaderUp/> : <LoaderDown/>
      }
    </>}
    <Wrapper ref={ref} $background={img}
        className={isActive ? 'active' : ''}>
        <h1>{title}</h1>
    </Wrapper>
    </>
  );
});

Block.displayName = 'Block';

export default Block;
