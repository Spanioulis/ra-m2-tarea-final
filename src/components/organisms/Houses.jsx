import React from 'react'
import styled from 'styled-components'
import { Grid } from '../../styles'
import { CardHouse, CardHouseButton } from '../molecules'

const GridStyled = styled(Grid)`
  flex: 1;
  padding: 1.2rem;
  margin-bottom: 1rem;
`

function Houses() {
  return (
    <GridStyled>
      <CardHouse />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
      <CardHouseButton />
    </GridStyled>
  )
}

export default Houses
