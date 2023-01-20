import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

const SelectStyled = styled.select`
  border-radius: 10px;
  color: ${colors.font.base};
  font-size: ${dimensions.font.h5};
  padding: 0rem 0.5rem;
  width: 400px;
`

function Select({ defaultValue, options, id, onChange }) {
  return (
    <SelectStyled
      name="select"
      id={id}
      onChange={onChange}
      defaultValue="default"
    >
      <option value="default" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyled>
  )
}

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}

export default Select
