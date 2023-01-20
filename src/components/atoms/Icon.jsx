import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconStyled = styled.span`
  color: ${({ color }) => color || 'whitesmoke'};
  font-size: ${({ size }) => size || '28px'};
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
`

function Icon({ name, color, size, ...props }) {
  return (
    <IconStyled
      {...props}
      className="material-symbols-outlined"
      color={color}
      size={size}
    >
      {name}
    </IconStyled>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Icon
