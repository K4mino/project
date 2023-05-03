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

    & .video{
        width:100vw;
        height:100vh;
    }
`;

const LoaderDown = () => (
    <Wrapper>
        <video autoPlay={true} muted className='video'>
            <source src='/videos/loader.mp4' type='video/mp4'/>
        </video>
    </Wrapper>
);

export default LoaderDown;
