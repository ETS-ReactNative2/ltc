import * as React from 'react'

import styled from 'styled-components'

import Reactify from '../'

const Wrapper = styled.div`
  margin-bottom: 3rem;
`

export default function RabbitHole ({ data, page }) {
  const { type } = page

  return <Wrapper><Reactify html={page.content} {...data} /></Wrapper>
}
