import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:fixed;
    z-index:99999;
    background-color:#333;
    width:100vw;
    height:100vh;
    color:#fff;
`;

const GenericLoader = () => (
    <Wrapper>
        <h1>Generic Loader</h1>
    </Wrapper>
);

export default GenericLoader;
