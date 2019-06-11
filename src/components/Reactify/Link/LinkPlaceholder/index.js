import styled from 'styled-components'
import styledMap from 'styled-map'

const color = styledMap`
  logo: DarkSlateGray;
  default: Crimson;
`

const display = styledMap`
  logo: inline-block;
  header: inline-block;
  footer: inline-block
  default: inline;
`

const fontSize = styledMap`
  logo: 1.5rem;
  default: 1rem;
`

const fontWeight = styledMap`
  logo: 600;
  default: normal;
`

const lineHeight = styledMap`
  logo: 2;
  default: 1.5;
`

const margin = styledMap`
  header: 0.18rem 1rem 0;
  default: 0;
`

const padding = styledMap`
  header: 0.18rem 1rem 0;
  logo: 0 1rem;
  default: 0;
`

const LinkPlaceholder = styled.div`
  color: ${color};
  display: ${display};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  margin: ${margin};
  padding: ${padding};
  text-decoration: none;
  ${({ css }) => css};
`

export default LinkPlaceholder
