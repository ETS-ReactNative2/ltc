import * as React from 'react'

import styled from 'styled-components'

const Header = styled.header`
  background-color: LightSlateGray;
  color: White;
  font-size: 1.2rem;
  font-weight: normal;
  letter-spacing: 0.1rem;
  margin: 0 -1rem;
  padding: 0.5rem 1rem;
`

const Wrapper = styled.aside`
  border: 1px solid LightSlateGray;
  border-radius: 5px;
  color: SlateGray;
  margin-top: 3rem;
  padding: 0 1rem;
`
Wrapper.displayName = 'Wrapper'

export default function Aside ({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <Header>DIGRESSION &#8230;</Header>
      {children}
    </Wrapper>
  )
}
