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

export default function LoaderUp() {
  return (
        <Wrapper>
            <video autoPlay={true} muted>
              <source src='/videos/loader2.mp4' type='video/mp4'/>
            </video>
        </Wrapper>
  );
}
