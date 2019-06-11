import * as React from 'react'

import styled from 'styled-components'

const Numeral = styled.div`
  color: MidnightBlue;
  font-size: 8rem;
  line-height: 1;
  text-align: center;
`

const Step = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  margin: 2rem auto;
  padding-bottom: 2rem;
  text-align: center;
  width: 33%;
`

export default function Steps ({ children }) {
  return (
    <>
      {children}
      <Step gridArea='STEP_ONE'>
        <Numeral>1</Numeral>
        <p>Choose a learning track</p>
      </Step>
      <Step gridArea='STEP_TWO'>
        <Numeral>2</Numeral>
        <p>Add a goal to your Edge365 performance plan</p>
      </Step>
      <Step gridArea='STEP_THREE'>
        <Numeral>3</Numeral>
        <p>Start learning and collect badges</p>
      </Step>
    </>
  )
}
