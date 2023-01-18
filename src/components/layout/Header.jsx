import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Text, Title } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
`
const TextStyled = styled(Text)`
  margin: 1.3rem 0.4rem;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#8f94cd'};
    font-weight: ${({ hoverFontWeight }) => hoverFontWeight || '700'};
    cursor: pointer;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title color="#6f1130" fontWeight="500" tag="h6">
        MIPISO.com.es
      </Title>
      <HeaderStyled direction="row">
        <TextStyled fontWeight="500">Buscador</TextStyled>
        <TextStyled fontWeight="500">Datos</TextStyled>
        <TextStyled fontWeight="500">Mi Perfil</TextStyled>
      </HeaderStyled>
    </HeaderStyled>
  )
}

export default Header
