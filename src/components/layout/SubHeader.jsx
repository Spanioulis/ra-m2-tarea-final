import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Icon, Label, Select } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  background-color: lightblue;
  gap: 1.2rem;
  padding-bottom: 0.9em;
  padding-left: 1.3rem;
  padding-right: 2rem;
  padding-top: 0.9em;
`
const IconContainer = styled.div`
  background-color: '#0096c7';
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(118, 232, 255, 1) 0%,
    rgba(57, 91, 255, 1) 100%
  );
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  padding: ${({ padding }) => padding || '0.4rem'};
  cursor: pointer;
`
const options = [
  { label: 'Piso', value: 'piso' },
  { label: 'Chalet', value: 'chalet' },
  { label: 'Garaje', value: 'garaje' },
]
const cities = [
  { label: 'Madrid', value: 'madrid' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Zaragoza', value: 'zaragoza' },
]

const onChange = ({ target }) => {
  console.log(target.value)
}

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props} direction="row">
      <Label htmlFor="options" />
      <Select
        defaultValue="Piso, chalet o garaje..."
        id="options"
        onChange={onChange}
        options={options}
      />
      <Label htmlFor="options" />
      <Select
        defaultValue="Madrid, Barcelona o Zaragoza..."
        id="cities"
        onChange={onChange}
        options={cities}
      />
      <IconContainer>
        <Icon name="search" />
      </IconContainer>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
