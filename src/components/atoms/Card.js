import styled from 'styled-components'
import FlexBox from '../../styles/FlexBox'

const Card = styled(FlexBox)`
  max-height: ${({ maxWidth }) => maxWidth || '300px'};
  border-radius: ${({ borderRadius }) => borderRadius || '15px'};
  box-shadow: ${({ boxShadow }) => boxShadow || '5px 5px 20px gray'};
`
export default Card
