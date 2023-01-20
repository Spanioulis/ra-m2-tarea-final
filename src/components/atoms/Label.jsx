import PropTypes from 'prop-types'

function Label({ htmlFor }) {
  return <label htmlFor={htmlFor} />
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
}

export default Label
