import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    transition: opacity 3s linear;
    opacity: 1;
    position:relative;
    z-index:1;
    background-size:cover;

    background-image: url(/images/bg.jpg);
    background-repeat: no-repeat;

    &.active {
        opacity:1;
    }
    &.active h1{
      color:#fff;
      background-color:#000;
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
  title, isActive, img, children
}, ref) => (
    <Wrapper ref={ref}
        className={isActive ? 'active' : ''}>
        {children}
    </Wrapper>
));

Block.displayName = 'Block';

export default Block;
