import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:fixed; 
    z-index:99999;
    width:100vw;
    height:100vh;
    background-color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const AnimatedLoader = styled.div`
  width: 95px;
  height: 120px;
  display: grid;
  color: #fff;
  background:
    linear-gradient(currentColor 0 0) top/100% 2px,
    radial-gradient(farthest-side at top, #0000 calc(100% - 2px), currentColor calc(100% - 1px), #0000) top,
    linear-gradient(currentColor 0 0) bottom/100% 2px,
    radial-gradient(farthest-side at bottom, #0000 calc(100% - 2px), currentColor calc(100% - 1px), #0000) bottom;
  background-size: 100% 1px, 100% 50%;
  background-repeat: no-repeat;
  animation: l18 4s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    background: inherit;
    border: inherit;
    animation: inherit;
  }
  &::after {
    animation-duration: 2s;
  }

  @keyframes l18 {
    100% { transform: rotate(1turn); }
  }
`;

const Loader = () => (
    <Wrapper>
        <AnimatedLoader />
    </Wrapper>
    
);

export default Loader;
