import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 46px;
    margin-bottom:10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 34px;
        margin-bottom: 14px;
        width: 95%;
    }

    @media (max-width: 480px) {
        font-size: 26px;
        width: 90%;
        text-align: left;
    }
`

const SectionTitle = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

export default SectionTitle