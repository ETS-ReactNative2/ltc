import styled from 'styled-components'

const Chunk = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-areas: 'LEFT RIGHT';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  ${({ css }) => css}
`

export default Chunk
