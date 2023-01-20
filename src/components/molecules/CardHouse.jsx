import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Button, Card, Text } from '../atoms'
import home from '../../assets/home.jpg'

const ImgStyled = styled.img`
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const FlexBoxStyled = styled(FlexBox)`
  padding: 0.1rem;
  margin-top: 0rem;
`
const TextStyled = styled(Text)`
  margin: 0.7rem 0.7rem;
`

function CardHouse() {
  return (
    <Card direction="row">
      <FlexBox>
        <ImgStyled src={home} alt="Home image" />
        <TextStyled fontWeight="600" fontSize={dimensions.base}>
          Piso en Barcelona, Grac...
        </TextStyled>
        <FlexBoxStyled direction="row" justify="space-evenly" align="center">
          <TextStyled color="black" fontSize="x-large" fontWeight="700">
            939.000€
          </TextStyled>
          <Button>Localizar</Button>
        </FlexBoxStyled>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
