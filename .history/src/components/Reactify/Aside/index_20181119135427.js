import * as React from 'react'

import { pipe, replace, trim } from 'ramda'
import styled from 'styled-components'

const collapseWhitespace = pipe(replace(/\s+/g, ' '), trim)

const Span = styled.span`
  color: DarkOliveGreen;
  cursor: help;
  text-decoration: none;
  border-bottom: 1px dotted DarkOliveGreen;
`

export default function SelfDoc ({ children, title = '' }) {
  const tip = collapseWhitespace(title)
  const content = collapseWhitespace(children || '')

  return <Span data-tip={tip}>{content}</Span>
}
