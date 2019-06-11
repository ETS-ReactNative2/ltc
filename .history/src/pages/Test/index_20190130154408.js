import * as React from 'react'

import styled from 'styled-components'

import RichTextEditor from '../../components/RichTextEditor'

const Outline = styled.p`
  border: 1px solid Crimson;
`

export default function Test () {
  return (
    <div>
      Well, hello there!
      <br />
      <Outline>
        <RichTextEditor />
      </Outline>
    </div>
  )
}
