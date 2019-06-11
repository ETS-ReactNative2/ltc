import styled from 'styled-components'
import styledMap from 'styled-map'

const color = styledMap`
  default: SeaGreen;
`

const margin = styledMap`
  footer: 0.18rem 0.5rem 0;
  header: 0.18rem 0.5rem 0;
  default: 0;
`

const LinkExternal = styled.a`
  text-decoration: none;
  color: ${color};
  display: inline-block;
  margin: ${margin};

  &:hover {
    color: Crimson;
    text-decoration: underline;

    &:after {
      color: Crimson;
    }
  }

  & code {
    color: SeaGreen;

    &:hover {
      color: Crimson;
    }
  }

  &:after {
    color: Silver;
    margin-left: 0.25em;
    font-size: 0.7em;
    vertical-align: text-bottom;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: '\f35d';
  }
`

export default LinkExternal
