import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    outline: none;
    border: none;
    background-color: #FFF;
    color: #000;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;

    &:hover {
        background-color: #f0f0f0;
    }
`;
const Button = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}


export default Button