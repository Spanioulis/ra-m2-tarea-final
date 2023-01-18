import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: ${({ backgroundColor }) => backgroundColor || '#8f94cd'};
  border-radius: 8px;
  border: none;
  color: ${({ color }) => color || 'whitesmoke'};
  cursor: pointer;
  padding: ${({ padding }) => padding || '0.3rem 1rem'};
  margin: ${({ margin }) => margin || '0rem 0.2rem'};
  text-align: center;
`

function Button({ children, onClick = () => {} }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button
