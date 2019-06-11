import styled from 'styled-components'
import styledMap from 'styled-map'

const margin = styledMap`
  home: 3.125rem 0;
  drawer: 3.125rem 0;
  default: 4rem 1rem 6rem;
`

const height = styledMap`
  drawer: 100vh;
`

const background = styledMap`
  drawer: Gainsboro;
  default: White;
`

const Main = styled.main`
  background-color: ${background};
  height: ${height};
  margin: ${margin};
  padding: 0;

  ${({ css }) => css}
`

export default Main
