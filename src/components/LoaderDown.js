import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:fixed; 
    z-index:999;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#333;
    color:#fff;
`;

const LoaderDown = () => (
    <Wrapper>
        <h1>Down</h1>
    </Wrapper>
);

export default LoaderDown;