import * as React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center;
  background-color: White;
  color: Crimson;
`

export default function Error (message = 'Oh, noes!') {
  return <Frame>{message}</Frame>
}
