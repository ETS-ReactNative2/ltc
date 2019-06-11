import styled from 'styled-components'

const ContentPane = styled.div`
  background-color: White;
  grid-area: LEFT;
  margin: 0;
  padding-bottom: 3rem;
  padding: 1rem;

  & img {
    max-width: 40vw;
  }

  & pre {
    max-width: 40vw;
  }

  ${({ css }) => css}
`

export default ContentPane
