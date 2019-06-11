import styled from 'styled-components'

const FigurePane = styled.div`
  align-self: stretch;
  background-color: Gainsboro;
  grid-area: RIGHT;
  justify-self: stretch;
  margin: 0;
  padding-bottom: 5rem;
  padding-top: 2.2rem;
  padding: 1rem;

  & img {
    max-width: 40vw;
  }

  & pre {
    max-width: 40vw;
  }
`

export default FigurePane
