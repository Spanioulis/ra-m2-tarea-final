import React from 'react'
import styled from 'styled-components'
import { Grid } from '../../styles'
import { CardHouse, CardHouseFeatured } from '../molecules'

const GridStyled = styled(Grid)`
  flex: 1;
  padding: 1.2rem;
  margin-bottom: 1rem;
`
function Houses() {
  const cardsNumber = 8
  const houses = []

  for (let i = 0; i < cardsNumber; i += 1) {
    houses.push(<CardHouse key={i} />)
  }

  return (
    <GridStyled>
      <CardHouseFeatured />
      {houses.map((house) => house)}
    </GridStyled>
  )
}

export default Houses
