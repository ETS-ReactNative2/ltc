import * as React from 'react'
import Embed from 'react-runkit'

import styled from 'styled-components'

const RunkitWrapper = styled.div`
  padding-left: 1.5rem;
  margin-right: 1rem;
`

export default function Runkit (props) {
  try {
    return (
      <RunkitWrapper>
        <Embed nodeVersion='10' {...props} />
      </RunkitWrapper>
    )
  } catch (e) {
    console.error('runkit fail', e)
    return null
  }
}
