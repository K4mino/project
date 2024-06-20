import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 40px;

    @media (max-width: 768px) {
        font-size: 34px;
        margin-bottom: 14px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`

const SectionTitle = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

export default SectionTitle