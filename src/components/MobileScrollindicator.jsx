import React from 'react'
import styled,{keyframes} from "styled-components";

const ArrowScroll = styled.div`
    position:fixed;
    top:10px;
    right:10px;
    height:40px;
    z-index: 999;
`

const Arrow = styled.div`
    border:solid #fff;
    border-width:0 5px 5px 0;
    display:inline-block;
    padding:12px;
    position:absolute;
    top:0;
    left:50%;
    transform:
        translateX(-50%)
        rotate(45deg);

    &:nth-child(2){
        animation:${arrow1} 1.5s ease-in-out infinite;
    }
    &:nth-child(3){
        animation:${arrow2} 1.5s ease-in-out infinite;
    }
`

const arrow1 = keyframes`
    100%{
        opacity:0;
        top:100%;
    }
`

const arrow2 = keyframes`
    100%{
        opacity:0;
        top:50%;
    }
`

const MobileScrollindicator = () => {
  return (
    <ArrowScroll>
        <Arrow/>
        <Arrow/>
        <Arrow/>
    </ArrowScroll>
  )
}

export default MobileScrollindicator