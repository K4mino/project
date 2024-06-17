import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:fixed;
    z-index:99999;
    background-color:#000;
    width:100vw;
    height:100vh;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const GenericLoader = () => (
    <Wrapper>
        <h1>Hi there!</h1>
    </Wrapper>
);

export default GenericLoader;
