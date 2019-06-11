import styled from 'styled-components'

const Centered = styled.div`
  max-width: 50rem;
  margin: 0 auto 4rem;
  padding: 1rem;
  text-align: center;
  ${({ css }) => css}
`

export default Centered
