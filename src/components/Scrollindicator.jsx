import React from 'react'
import styled,{keyframes} from 'styled-components'


const scrollAnimation = keyframes`
    0% {
        opacity: 1;
        bottom: 80%;
    }
    100% {
        opacity: 0;
        bottom: 20%;
    }
`;

const MouseScroll = styled.div`
    width: 30px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 30px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;

    &::before {
        content: "";
        width: 5px;
        height: 5px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 50%;
        animation: ${scrollAnimation} 2.5s infinite;
    }
`;

const Scrollindicator = () => {
  return (
    <MouseScroll/>
  )
}

export default Scrollindicator