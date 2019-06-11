import * as React from 'react'

import styled from 'styled-components'

import RichTextEditor from '../../components/RichTextEditor'

const Outliner = styled.p`
  border: 1px solid Crimson;
`

export default function Test () {
  return (
    <div>
      Well, hello there!
      <br />
      <Outliner>
        <RichTextEditor />
      </Outliner>
    </div>
  )
}
