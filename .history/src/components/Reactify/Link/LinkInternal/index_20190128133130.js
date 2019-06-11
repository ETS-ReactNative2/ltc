import * as React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import styledMap from 'styled-map'

const color = styledMap`
  logo: DarkSlateGray;
  drawer: DarkSlateGray;
  default: DarkSlateBlue;
`

const display = styledMap`
  logo: inline-block;
  drawer: inline-block;
  header: inline-block;
  footer: inline-block;
  default: inline;
`

const margin = styledMap`
  header: 0.18rem 1rem 0;
  default: 0;
`

const borderBottom = styledMap`
  drawer: 1px solid Crimson;
  default: none;
`

// eslint-disable-next-line no-unused-vars
const LinkInternal = styled(({ logo, header, ...rest }) => <Link {...rest} />)`
  color: ${color};
  display: ${display};
  margin: ${margin};
  text-decoration: none;

  &:hover {
    color: Crimson;
    border-bottom: ${borderBottom};
  }
`

export default LinkInternal
