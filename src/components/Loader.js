import React from 'react';
import styled from 'styled-components';
import LoaderDown from './LoaderDown';
import LoaderUp from './LoaderUp';

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

const Loader = ({ direction }) => (
    <Wrapper>
        {
            direction === 'down' ? <LoaderDown/> : <LoaderUp/>
        }
    </Wrapper>
);

export default Loader;
