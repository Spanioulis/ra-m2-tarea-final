import React from 'react'
import styled from 'styled-components'
import { Card, Text } from '../atoms'
import { dimensions } from '../../styles'
import home from '../../assets/home.jpg'

const ImgStyled = styled.img`
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const Container = styled.div`
  position: relative;
`

const TextStyled = styled(Text)`
  left: 0.9rem;
  position: absolute;
  top: 0rem;
`

function CardHouseFeatured() {
  return (
    <Card direction="row">
      <Container>
        <ImgStyled src={home} alt="Home image" />
        <TextStyled
          color="whitesmoke"
          fontSize={dimensions.xl}
          fontWeight="600"
        >
          Piso en Barcelona, Grac...939.000
        </TextStyled>
      </Container>
    </Card>
  )
}

export default CardHouseFeatured
