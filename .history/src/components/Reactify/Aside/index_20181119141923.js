import * as React from 'react'

import styled from 'styled-components'

const Header = styled.header`
  font-size: 1.2rem;
  font-weight: normal;
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
      <Header>A digression</Header>
      {children}
    </Wrapper>
  )
}
