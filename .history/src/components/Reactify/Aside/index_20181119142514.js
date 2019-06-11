import * as React from 'react'

import styled from 'styled-components'

const Header = styled.header`
  background-color: SlateGray;
  color: White;
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0 -1rem;
  padding: 0.5rem 1rem;
`

const Wrapper = styled.aside`
  border: 1px solid SlateGray;
  border-radius: 5px;
  color: SlateGray;
  padding: 0 1rem;
`
Wrapper.displayName = 'Wrapper'

export default function Aside ({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <Header>A DIGRESSION</Header>
      {children}
    </Wrapper>
  )
}
