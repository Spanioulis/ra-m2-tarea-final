import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => column || 'auto auto auto'};
  grid-template-rows: ${({ row }) => row || ''};
  gap: ${({ gap }) => gap || '0.6rem'};
`

export default Grid
