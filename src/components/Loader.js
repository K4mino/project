import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
    position:fixed; 
    z-index:999;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
`;

export default function Loader() {
  return (
        <Wrapper>
            <Spin size='large'/>
        </Wrapper>
  );
}
